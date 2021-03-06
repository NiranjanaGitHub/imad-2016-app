var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var config = 
{
  user: 'niranjanagithub',
  database: 'niranjanagithub',
  host: 'db.imad.hasura-app.io',
  port: '5432',
  password: process.env.DB_PASSWORD,                                  //Environment variable
};

var app = express();
app.use(morgan('combined'));

app.get('/Aboutme-App/Text', function (req, res) {                     // ==> Text Response
  res.send('This is a Text Reponse');
});

app.get('/Aboutme-App/Index', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'index.html'));     // ==> HTML Response
});

app.get('/Aboutme-App/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'style.css'));     // ==> CSS Response
});

var pool = new Pool(config);     // Connection Pool is set up as soon as the app is started.
app.get('/test_db', function (req,res) 
{
    pool.query('SELECT * FROM test_db', function(err,result) 
    {
        if(err)
        {
            res.status(500).send(err.toString());
        }
        else
        {
            res.send(JSON.stringify(result.rows));
        }
    });
});


/* Using Key matching to display the comments in the URL /Submit-Comments
var comments = [];
app.get('/Submit-Comments/:comment', function (req, res) {            
  var comment = req.params.comment;
  comments.push(comment);
  res.send(JSON.stringify(comments));   
});
*/

//Using Query String to display the comments in the URL /Submit-Comments
var comments = [];
app.get('/Aboutme-App/Submit-Comments', function (req, res) {            
  var comment = req.query.comment;
  comments.push(comment);
  res.send(JSON.stringify(comments));   
});


app.get('/aboutme/:aboutmename', function (req, res) {
//var aboutmename = req.params.aboutmename;             Extract the name.
// The below command is prone to SQL injection:
// pool.query("SELECT * FROM intro WHERE title = '" + req.params.aboutmename + "'", function(err,result)
// to prevent from SQL injection : Insert parameters into the SQL query in a way a parameter is safe. Never trust user input. Its important to use trusted libraries to protect our SQL.
pool.query("SELECT * FROM intro WHERE title = $1",[req.params.aboutmename], function(err,result)
  {
     if(err)
     {
         res.status(500).send(err.toString());
     }
     else
     {
         if(result.rows.length === 0)
         {
             res.status(404).send('Introduction Page not found');
         }
         else
         {
             var aboutmeData = result.rows[0];
             res.send(createTemplate(aboutmeData));
         }
     }
  });
});

/* Automated the below URL mapping as above:
app.get('/Aboutme-App/Intro', function (req, res) {
  res.send(createTemplate(intro));
});

app.get('/Aboutme-App/Hobbies', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'hobbies.html'));
});

app.get('/Aboutme-App/Plans', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'plans.html'));
});
*/

app.get('/Aboutme-App/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'main.js'));      // ==> Client Side Javascript
});

var counter = 0;
app.get('/Aboutme-App/counter', function (req, res) {
  counter = counter + 1;    
  res.send(counter.toString());
});

// Creating an object aboutme containing intro, hobbies and plans.
// Creating a series of objects to store those contents which are differing in each of the HTML document in Aboutme-App:
//Noted: Deleted the article object as it has been added in the Database.

// Creating a common htmlTemplate & Create a function createTemplate with data object and create the variables:

function createTemplate(data)
{
    var date = data.date;
    var title = data.title;
    var heading = data.heading;
    var tagline = data.tagline;
    var contents = data.contents;
    
    var htmlTemplate = `
    <!DOCTYPE HTML>
    <html>
        <head>
            <title> ${title} </title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link href="/Aboutme-App/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                <a href="/Aboutme-App/Index">Home Page</a>
                </div>
                <div>
                    ${date.toDateString()}
                </div>
                <hr/>
                    <h1> ${heading} </h1>
                <div>
                    <h2> ${tagline} </h2>    
                </div>
                <div>
                    ${contents}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});













/*
IMAD Practise:
----------------
var articles = 
{
    'article-one':
    {
    title: 'Article One Web Page',
    heading: 'Article One',
    date: 'Sept 5, 2016',
    content: `
                <p> This is the contents of Article One. This is the contents of Article One. 
                    This is the contents of Article One. This is the contents of Article One.  
                    This is the contents of Article One. This is the contents of Article One. 
                    This is the contents of Article One. This is the contents of Article One. 
                    This is the contents of Article One. This is the contents of Article One. 
                </p>
            `
    },
    'article-two':
    {
    title: 'Article Two Web Page',
    heading: 'Article Two',
    date: 'Sept 10, 2016',
    content: `
                <p> This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                </p>
                <p> This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                    This is the contents of Article Two. This is the contents of Article Two. 
                </p>
            `
    },
    'article-three':
    {
    title: 'Article Three Web Page',
    heading: 'Article Three',
    date: 'Sept 15, 2016',
    content: `
                <p> This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                </p>
                <p> This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                </p>
                <p> This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                    This is the contents of Article Three. This is the contents of Article Three. 
                </p>
            `
    }
};

function createTemplate (data) 
{
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;

var HtmlTemplate = `
<html>
    <head>
        <title> 
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3> 
                ${heading}
            </h3>
            <div> 
                ${date}
            </div>
            <div>
                ${content}
            </div>
        </div>
    </body>
</html>
`;
return HtmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function(req,res) {
 counter = counter + 1;
 res.send(counter.toString());
});

// Type Name
var names = [];
// Get the name: PARAMS
//app.get('/submit-name/:name',function(req,res) {
//var name = req.params.name;
//Get the name: QUERY parameter string
app.get('/submit-name',function(req,res) {         //URL: /submit-name?name=xxxxx
var name = req.query.name;
names.push(name);
res.send(JSON.stringify(names));                  // Convert array to string.
});

app.get('/:articleName', function (req,res) {
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
}); 

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

*/

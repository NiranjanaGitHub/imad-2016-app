var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/Aboutme-App/Index', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'index.html'));
});

app.get('/Aboutme-App/Intro', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'intro.html'));
});

app.get('/Aboutme-App/Interests', function (req, res) {
  res.sendFile(path.join(_dirname,'Aboutme-App',hobbies.html))
});

app.get('/Aboutme-App/Plans', function (req, res) {
  res.sendFile(path.join(_dirname,'Aboutme-App',plans.html))
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});














/* IMAD Practise:
   -------------
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

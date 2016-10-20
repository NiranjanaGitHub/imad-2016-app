var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/Aboutme-App/Index', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'index.html'));
});

app.get('/Aboutme-App/Intro', function (req, res) {
  res.send(createTemplate(intro));
});

app.get('/Aboutme-App/Hobbies', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'hobbies.html'));
});

app.get('/Aboutme-App/Plans', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'plans.html'));
});

app.get('/Aboutme-App/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'Aboutme-App', 'style.css'));
});

// Creating an object aboutme containing intro, hobbies and plans.
// Creating a series of objects to store those contents which are differing in each of the HTML document in Aboutme-App:

var aboutme = {
    intro :
    {
        title: 'About Me',
        heading: 'Introduction',
        tagline: 'Hi Everyone !!! Let me introduce myself',
        contents: 
        `<h3> Intro: </h3>
                    <p> My name is Niranjana. I am from Chennai. I did my schooling at PSBB and college at Meenakshi Sundararajan Engineering College in Electrical and Electronics Engineering. In my final year I got placed in Tata Consultancy Services as a Software Developer. I got trained in UNIX,C/C++ and Mainframe. I have 3.5 years of experience at TCS in Mainframe technology. I had a great learning experience and each of the projects I worked where very challenging and improved my knowledge. I all looking forward for learning new technologies and gaining new skills.
                    </p>
                    <h3> Family: </h3>
                    <p> My father's name is Venkatakrishnan and mother's name is Rajarajeswari. I have an eleder brother, Subramanian who is a Charted account. During the weekends we all make it a habit to dine and spend time together. As we live in a flat, I have a lot of friends in my apartment and we have a good time during the weekends and holidays.
                    </p>`
    },
    hobbies :
    {
        title: 'Interests & Hobbies',
        heading: 'Interests & Hobbies',
        tagline: 'Let me share my Interests & Hobbies',
        contents: 
        `<h3> Interests: </h3>
                <p> Science and Technology has rapidy changed the way we live and made our life much more easier. In the current digital world it is important for all to be update with the latest technologies and innovations in science. We need to upgrade our skills and be updated with the latest trends.
                </p>
                <ol>
                    <li> Big Data Performance - Hadoop, Map Reduce, Spark, R, Pig and Hive</li>
                    <li> Web/Mobile and Hybrid App Development</li>
                    <li> Cloud Computing</li>
                    <li> Cyber Security and Cryptography</li>
                </ol>
                <h3> Hobbies: </h3>
                <p> Listed below are the activites that I like to do during my leisure time:</p>
                    <dl>
                        <dt> Reading novels and fiction books:</dt>
                        <dd> Fiction book: Harry Potter Series by J.K Rowling</dd>
                        <dd> Magazines: Science Reporter, Digit - Fast Track and Demystify, Open SourceCode, New Scientist</dd>
                        <dd> All books written by A.P.G Abdul Kalam Sir</dd>
                    
                        <dt> Games:</dt>
                        <dd> Playing Badminton</dd>
                        <dd> Carrom Board and Chess</dd>
                    
                        <dt> Art Work:</dt>
                        <dd> Pencil Sketching</dd>
                        <dd> Tanjore Painting</dd>
                        <dd> Quilling and other paper work</dd>
                    </dl>`
    },
    plans :
    {
        title: 'Future Plans',
        heading: 'My Plans for the future',
        tagline: 'Let me share my future aspirations:',
        contents: 
        `       <p> There are a lot of online courses on the net which assist us in learing new skills. I constantly look for MOOC's and          enhance my knowledge. I came across the 5 week online course on 'Introduction to Modern Application Development' in           the newspaper. I took immediate interest to the course and enrolled for the certification as well. </p>
                <p> The entire 5 week course was very enlightening and helped me learn basic concepts from Internet, its working, web app basics, HTML, CSS, Database - SQL, Securing our app. It made me marvel at the intricate concepts which are taken care of while developing a webapp and appreciate its end result. My kind request to NPTEL and Hasura to take up more such courses in the future as these are truly enlightening to all the students worldwide. </p>
                <p> The end result of this course is to create a webapp of our own and apply the concepts that we have learnt. This will be my next focus. </p>
                <h2> Idea:</h2>
                <p> One of the major problems that we face in our day to day life is computing to any place due to the traffic that we need to endure. The number of vehicles that hit the road has increased at a rapid pace. If we could organize this process, we can reduce the issue. One solution is to track all the government buses. An app to show the users, the current location of the buses and the approximate time at which it will reach the bus stop and also the availability of other buses. This will help the bus commuters to plan the work accordingly and save time. </p>`
    }
};

// Creating a common htmlTemplate & Create a function createTemplate with data object and create the variables:

function createTemplate(data)
{
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

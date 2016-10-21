/* To display contents in the log:
console.log('Loaded!'); */

/*Code to move the click Button image by 100px using onclick command:
var click = document.getElementById('click');
click.onclick = function()
{
  click.style.marginLeft='100px';  
};
*/

/*Code to move the click button image gradually every 100ms using interval command:
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 5;
    click.style.marginLeft= marginLeft + 'px';  
}

click.onclick = function()
{
    var interval = setInterval(moveRight,50);
}
*/

/*Code to increment the counter when the button is clicked:
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function()
{
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
*/

//Code to make a request to the counter endpoint and thus increment the value:

// 1. Action to be done when we recieve a request:
var button = document.getElementById('counter');
button.onclick = function()
{
    var request = new XMLHttpRequest();                  
    request.onreadystatechange = function () 
    {
        if (request.readyState === XMLHttpRequest.DONE)
        {
            if (request.status === 200)
            {
                var counter = request.responseText;         // Take the response and put it in the counter variable.
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };

// 2. Make a request:
request.open('GET','http://niranjanagithub.imad.hasura-app.io/Aboutme-App/counter',true);
request.send(null);
};

//Code to enter name and display all the names that have been submited so far:

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');

submit.onclick = function()
{
var names =['name1','name2','name3','name4','name5'];   //displaying the list of names in
var list ='';                                           // the form of an unordered list.
for (var i=0; i < names.length; i++)
{
    list += '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('nameList');
ul.innerHTML = list;
};

// Client-Side JavaScript:
//------------------------
// console.log('Loaded!'); 
// var element = document.getElementById('main'); 
// element.innerHTML = 'This is Niranjana.V. I have changed the contents.'; 
// var img = document.getElementById('img'); 
// var marginLeft = 0; //
// function moveRight() 
//{
//    marginLeft = marginLeft + 2;
//    img.style.marginLeft = marginLeft + 'px';
//}
// img.onclick = function ()
// {
//    var interval = setInterval(moveRight, 60)
// }

// Counter Incremant Code:
//------------------------

var button = document.getElementById('counter');

button.onclick = function()
{
// Create a request object:
var request = new XMLHttpRequest();

// Capture the response and store it in a variable:
    request.onreadystatechange = function() 
    {
        if (request.readyState === XMLHttpRequest.DONE)
        {
             if (request.status === 200)
            {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };

    // Make the request:
    request.open('GET','http://niranjanagithub.imad.hasura-app.io/counter',true);
    request.send(null);
};

// Enter the Name:
var nameInput = docuemnt.getelementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
// Make  a request to the server and send a name
// Capture a list of names and render it as a list
var names = ['Name1','Name2','Name3','Name4'];
var list = ' ';
for (var i=0; i < names.length; i++)
{
    list <= '<li>' + names[i] + '</li>';
}
var ul = document.getElementById('namelist');
ul.innerHTML = list;
};
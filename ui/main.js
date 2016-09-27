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
    request.open('GET','http://http://niranjanagithub.imad.hasura-app.io/counter',true);
    request.send(null);
};

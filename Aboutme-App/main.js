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

//Code to increment the counter when the button is clicked:
var counter = 0;
var button = document.getElementById('button');
button.onclick = function() 
{
    counter = counter + 1;
    var span = document.getElementById('span');
    span.innerHTML = counter.toString();
};

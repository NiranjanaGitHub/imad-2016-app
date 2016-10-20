console.log('Loaded!'); 

//Code to the move the click Button image by 100px using onclick command:
var click = document.getElementById('click');
/*
click.onclick = function()
{
  click.style.marginLeft='100px';  
};
*/

//Code to move the click button image gradually every 100ms using interval command:
var marginLeft = 0;

function moveRight() {
    marginLeft = marginLeft + 5;
    click.style.marginLeft= marginLeft + 'px';  
}

click.onclick = function()
{
    var interval = setInterval(moveRight,50);
}

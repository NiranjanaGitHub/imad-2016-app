console.log('Loaded!');
var element = document.getElementById('main');
element.innerHTML = 'This is Niranjana.V. I have changed the contents.';
var img = document.getElementById('img');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft = 2;
    img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function ()
{
    var interval = setInterval(moveRight, 60)
}
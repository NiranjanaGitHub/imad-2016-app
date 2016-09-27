console.log('Loaded!');
var element = document.getElementById('main');
element.innerHTML = 'This is Niranjana.V. I have changed the contents.';
var img = document.getElementByID('img');
img.onclick = function ()
{
    img.style.marginLeft = '100px';
}

const showLocation = () =>{
    let url = "https://www.google.com/maps/place/Muljibhai+Madhvani+Foundation/@0.3153203,32.5888166,17z/data=!3m1!4b1!4m5!3m4!1s0x177dbc787d481a2f:0xf0373f9883513670!8m2!3d0.3152519!4d32.5910583";
}

const redirect = () => {
    location.href = "zziwatech.html";
}

var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for(let i = 0; i < text.innerText.length; i++)
{
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i])+ '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for(let i = 0; i < length; i++)
{
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
}

const h=window.innerHeight;

const fadeIns = document.querySelectorAll('.fade-in');
const texts = document.querySelectorAll('.animatedText');

var textsAnimated = []
var tempChar;

texts.forEach((t,i)=>
{
    textsAnimated[i]=false;
})

function animateItem(y) {
    fadeIns.forEach((fadeIn,i)=>
    {
        if (!fadeIn.classList.contains("start") & y+h>fadeIn.offsetTop) 
        {
            fadeIn.classList.add('start');
        }
    })
}

window.addEventListener('scroll', function(e) {
    var y=window.pageYOffset;
    animateItem(y);
});


function fadeOutEffect(target) {
    var fadeEffect = setInterval(function () {
        if (!target.style.opacity) {
            target.style.opacity = 1;
        }
        if (target.style.opacity > 0) {
            target.style.opacity -= 0.1;
        } else {
            clearInterval(fadeEffect);
        }
    }, 15);
}

window.onload = function(){
    setTimeout(() => {  fadeOutEffect(document.querySelector(".loader")); }, 100);
    setTimeout(() => {  fadeOutEffect(document.querySelector(".loader-wrapper")); }, 300);
};
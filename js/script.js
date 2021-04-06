const sections = document.querySelectorAll('section');
const browsers = document.querySelectorAll('#menu li');

let index=0;
setCurrent(0);

function move(newIndex)
{
    index=newIndex;
    sections.forEach((section, i)=>
    {
        if (i==index)
        {
            section.scrollIntoView({behavior:"smooth"});
        }
    })
}

function move2(newIndex)
{
    sections.forEach((section, i)=>
    {
        if (i==newIndex)
        {
            section.scrollIntoView({behavior:"smooth"});
        }
    })
}


function setCurrent(newIndex)
{
    browsers.forEach((browser, i)=>
    {
        if(i==newIndex)
        {
            browser.className="active";
        }
        else
        {
            browser.className=browser.className.replace("active", "");
            
        }
    })
}

let preY=0;

window.addEventListener('scroll', function(e) {
    var h=window.innerHeight;
    var y=window.pageYOffset;
    
    if(y<h/2)
    {
        //if(index!=0)setTimeout(function() { move(0); }, 500);
        setCurrent(0);
    }
    else if (y<1.5*h)
    {
        //if(index!=1)setTimeout(function() { move(1); }, 500);
        setCurrent(1);
    }
    else if(y<4.2*h)
    {
        //if(index!=2)setTimeout(function() { move(2); }, 500);
        setCurrent(2);
    }
    else
    {
        //if(index!=3)setTimeout(function() { move(3); }, 500);
        setCurrent(3);
    }

    preY=y;
});

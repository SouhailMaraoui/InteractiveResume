const sections = document.querySelectorAll('section');
const browsers = document.querySelectorAll('#menu li');
const idlePeriod = 500;

let lastAnimation = 0;
let index=0;
move(index);
function move(newIndex)
{
    index=newIndex;
    sections.forEach((section, i)=>
    {
        if (i==index)
        {
            section.scrollIntoView({behavior: 'smooth'});
        }
    })
    browsers.forEach((browser, i)=>
    {
        if(i==index)
        {
            browser.className+="active";
        }
        else
        {
            browser.className=browser.className.replace("active", "");
            
        }
    })
}

window.addEventListener('wheel', event =>
{
    const delta=event.wheelDelta;
    var timeNow = new Date().getTime();
    if(timeNow - lastAnimation < idlePeriod)
    {
        event.preventDefault();
        return;
    }

    if(delta<-10 && index<sections.length-1)
    {
        index++;
        sections.forEach((section, i)=>
        {
            if (i==index)
            {
                section.scrollIntoView({behavior: 'smooth'});
            }
        })
        console.log(delta);
    }
    else if(delta>10 && index>0)
    {
        index--;
        sections.forEach((section, i)=>
        {
            if (i==index)
            {
                section.scrollIntoView({behavior: 'smooth'});
            }
        })
    }
    console.log(index);
    lastAnimation = timeNow;
})

$(document).on('touchmove', function() 
{
    $(document).trigger('wheel');
});
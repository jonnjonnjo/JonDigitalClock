const hourEl = document.getElementById("hour")
const minuteEL = document.getElementById("minute")
const secondEl = document.getElementById("second")



function updateWalpaper()
{
    let h = new Date().getHours()
    if(h >= 6 && h <= 18)
    {
        document.body.style.backgroundImage = "url(image/noon.jpg)"
        hourEl.style.backgroundColor = "red"
        minuteEL.style.backgroundColor = "red"
        secondEl.style.backgroundColor = "red"
        const box = document.getElementsByClassName('clock')
        box.span.style.backgroundColor = 'red'

    }else   
    {
        document.body.style.backgroundImage = "url(image/night.jpg)"
        hourEl.style.backgroundColor = "blue"
        minuteEL.style.backgroundColor = "blue"
        secondEl.style.backgroundColor = "blue"
    }
}


function updateClock()
{
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
  

    h = h < 10 ? "0" + h : h
    m = m < 10 ? "0" + m : m
    s = s < 10 ? "0" + s : s

    if(hourEl.innerText != h)
    
    hourEl.innerText = h
    minuteEL.innerText = m 
    secondEl.innerText = s

    setTimeout(()=>{
        updateClock()
        updateWalpaper()
    },1000)
}

updateClock()
// Selecting Elements for Analog 
const hourEl = document.querySelector('.hr');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');

// Selecting Elements of digital
const diHour = document.querySelector('.Dihr')
const diMin = document.querySelector('.Dimin')
const diSec = document.querySelector('.Disec')

setInterval(() => {
    const date = new Date();


    const secRotate = date.getSeconds()/60 * 360  -90;
    const minRotate = date.getMinutes()/60 * 360 - 90
    const hourRotate = date.getHours()/12 * 360- 90;
    
  


    
    secEl.style.transform = `rotate(${secRotate}deg)`
    minEl.style.transform = `rotate(${minRotate}deg)`
    hourEl.style.transform= `rotate(${hourRotate}deg)`



    // Digital
    
diHour.textContent = `${date.getHours()}`;
diMin.textContent =  `${date.getMinutes()}`;
diSec.textContent = `${date.getSeconds()}`


   

    
}, 1000)



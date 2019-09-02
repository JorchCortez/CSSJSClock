

const interval = 1000;
const secondHand = document.querySelector('.sec-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand   = document.querySelector('.hour-hand');

const secHolo    = document.querySelector('.sec');
const minHolo    = document.querySelector('.min');
const hourHolo    = document.querySelector('.hour');
getTime();
function getTime (){
    let now = new Date();
    let sec = now.getSeconds();
    let secDeg = ((sec / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${(secDeg)}deg)`;
    secHolo.innerHTML = `S ${sec}`

    let min = now.getMinutes();
    let minsDeg = ((min / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${(minsDeg)}deg)`;
    minHolo.innerHTML = `M ${min}`

    let hour = now.getHours();
    let hourDeg = ((hour / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${(hourDeg)}deg)`; 
    hourHolo.innerHTML = `H ${hour}`
}

setInterval( () => getTime(), interval);
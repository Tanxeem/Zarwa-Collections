let days =document.querySelector(".days");
let hours =document.querySelector('.hours');
let minutes =document.querySelector('.minutes');
let seconds =document.querySelector('.seconds');

let newyear = new Date("Feb 1, 2024 00:00:00:00").getTime();

updatecountdown();

function updatecountdown () {
    let now = new Date().getTime();
    let downtime = newyear - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    let d = Math.floor(downtime / day);
    let h = Math.floor((downtime % day)/hour);
    let m = Math.floor((downtime % hour)/minute);
    let s = Math.floor((downtime % minute)/second);

    if(h < 10) {
        h = "0" +h;
    }
    if(m < 10) {
        m = "0" + m;
    }
    if(s < 10) {
        s = "0" + s;
    }

    days.innerHTML = d;
    hours.innerHTML = h;
    minutes.innerHTML = m;
    seconds.innerHTML = s;

    setTimeout(updatecountdown,1000);
}
const days =document.querySelector(".days");
const hours =document.querySelector('.hours');
const minutes =document.querySelector('.minutes');
const seconds =document.querySelector('.seconds');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`Mar 1 ${currentYear + 1} 00:00:00`);

function updatecountdown () {
    const currentTime = new Date();
    const diff = newYearTime - currentTime;


    let d = Math.floor(diff / 1000 / 60 / 60 / 24);
    let h = Math.floor(diff / 1000 / 60 / 60) % 24;
    let m = Math.floor(diff / 1000 / 60) % 60;
    let s = Math.floor(diff / 1000) % 60;

    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

}

setInterval(updatecountdown,1000);

updatecountdown();

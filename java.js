const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

// Set the target date (March 1st of the next year)
let targetDate = new Date(`Mar 1 ${new Date().getFullYear() + 0} 00:00:00`);

function updateCountdown() {
    const currentTime = new Date();
    const timeDifference = targetDate - currentTime;

    // Check if the target date has passed
    if (timeDifference <= 0) {
        clearInterval(countdownInterval); // Stop the countdown
        daysElement.innerHTML = "00";
        hoursElement.innerHTML = "00";
        minutesElement.innerHTML = "00";
        secondsElement.innerHTML = "00";
        return;
    }

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the DOM with leading zeros
    daysElement.innerHTML = days < 10 ? `0${days}` : days;
    hoursElement.innerHTML = hours < 10 ? `0${hours}` : hours;
    minutesElement.innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    secondsElement.innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}

// Update the countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call to avoid delay
updateCountdown();
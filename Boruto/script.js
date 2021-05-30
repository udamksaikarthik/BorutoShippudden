const reDate = "20 Mar 2022";

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secsEl = document.getElementById('secs');

function countdown() {
    const releaseDate = new Date(reDate);
    const presentDate = new Date();
    const millsec = (releaseDate - presentDate) / 1000;

    const days = Math.floor((millsec) / 3600 / 24);

    const hours = Math.floor((millsec) / 3600) % 24;

    const mins = Math.floor((millsec) / 3600) % 60;

    const secs = Math.floor((millsec) % 60);
    console.log(millsec, days, hours, mins, secs);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secsEl.innerHTML = secs;
}

countdown();

setInterval(countdown, 1000);
const countdown = () => {
    //specify date and time
    const countDate = new Date("Aug 15, 2024 12:00:00").getTime();
    const now = new Date().getTime();
    //calculate remaining time
    const remainingTime = countDate - now;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    document.querySelector('.day').innerText = textDay > 0 ? textDay : 0;
    document.querySelector('.hour').innerText = textHour > 0 ? textHour : 0;
    document.querySelector('.minute').innerText = textMinute > 0 ? textMinute : 0;
    document.querySelector('.second').innerText = textSecond > 0 ? textSecond : 0;
    
}

// run every 500 ms
setInterval(countdown, 500);
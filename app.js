const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.minute-hand');
const hourHand = document.querySelector('.hour-hand');

function setData() {
    const now = new Date();

    // Seconds
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondDegrees}deg)`;

    // Update minutes and hours only when seconds are 0
    if (seconds === 0) {
        // Minutes
        const minutes = now.getMinutes();
        const minutesDegrees = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

        // Hours
        const hours = now.getHours();
        const hourDegrees = ((hours / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }
}

setInterval(setData, 1000);
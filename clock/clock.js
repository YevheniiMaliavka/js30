const handSecond = document.querySelector('.hand-second');
const handMinute = document.querySelector('.hand-minute');
const handHour = document.querySelector('.hand-hour');
const hands = document.querySelectorAll('.hand');

setInterval(() => {
    const now = new Date();
    const secondDegrees = (now.getSeconds() / 60) * 360 + 90;
    const minuteDegrees = (now.getMinutes() / 60) * 360 + 90;
    const hourDegrees = (now.getHours() / 12) * 360 + 90;

    if(secondDegrees === 90){
        hands.forEach(hand => hand.style.transition = 'none');
    }
    else{
        hands.forEach(hand => hand.style.transition = '');
    }

    handSecond.style.transform = `rotate(${secondDegrees}deg)`;
    handMinute.style.transform = `rotate(${minuteDegrees}deg)`;
    handHour.style.transform = `rotate(${hourDegrees}deg)`;
}, 1000);
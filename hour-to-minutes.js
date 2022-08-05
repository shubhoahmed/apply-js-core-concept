// A function to convert time hour to minute 
function makeMinutes(hour) {
    const minutes = hour * 60;
    return minutes;
}
let giveHour = 6;
let contertedMinutes = makeMinutes(giveHour);
console.log(giveHour, 'hour is equals to ', contertedMinutes, 'minutes.');
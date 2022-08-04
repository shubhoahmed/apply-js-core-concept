// Miles to kilo convertion program
function mileToKm(mile) {
    const kiloMeter = mile * 1.60934;
    return kiloMeter;
}
let myOfficeDistance = 4;
let distanceInKilo = mileToKm(myOfficeDistance);
console.log(distanceInKilo);
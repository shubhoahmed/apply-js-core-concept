//Celcius to farenheit conversion program
function celciusToFarenheit(celcius) {
    const farenheit = celcius * 1.8 + 32;
    return farenheit;
}
const celciusTemp = 60;
const farenheitTemp = celciusToFarenheit(celciusTemp);
console.log(farenheitTemp, 'degree');
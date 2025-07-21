let year = document.getElementById("year").innerHTML = new Date().getFullYear();


let lastModified = document.lastModified;
const lastModifiedparagraph = document.querySelector('#lastModified');
lastModifiedparagraph.innerHTML = lastModified;


function calculateWindChillFactor(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        return Math.round(windChillFormula(temperature, windSpeed));
    }
    return 35.74 + (0.6215 * temperature) + (0.4275 * temperature - 35.75) * windSpeed ^ 0.16;
}
return N/A; // Return NaN if conditions are not met

const temp = 68; // Example temperature in Fahrenheit
const windSpeed = 9; // Example wind speed in mph,
const windChill = calculateWindChillFactor(temp, windSpeed);
const windChillParagraph = document.querySelector('#windChill')
windChillParagraph.innerHTML = `Wind chill: ${windChill.toFixed(2)}°F`;    
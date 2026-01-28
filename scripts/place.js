const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

document.getElementById('lastModified').textContent = "Last Modification: " + document.lastModified;

// Static values for weather
const temperature = 29; // °C
const windSpeed = 15; // km/h

// Function to calculate wind chill
function calculateWindChill(temp, speed) {
    return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Logic to display wind chill
const windChillElement = document.getElementById('chill');

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill} °C`;
} else {
    windChillElement.textContent = "N/A";
}

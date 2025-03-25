document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("copyright").textContent = `© ${new Date().getFullYear()}`;

    
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;


    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + " °C";
        } else {
            return "N/A";
        }
    }

    const temp = 18;  // Static temperature in Celsius
    const windSpeed = 10; // Static wind speed in km/h

    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});

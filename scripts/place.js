document.addEventListener("DOMContentLoaded", function () {
    // 1️⃣ - Set Current Year in Footer
    document.getElementById("copyright").textContent = `© ${new Date().getFullYear()}`;

    // 2️⃣ - Set Last Modified Date in Footer
    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

    // 3️⃣ - Wind Chill Calculation
    function calculateWindChill(temp, windSpeed) {
        if (temp <= 10 && windSpeed > 4.8) {
            return (13.12 + 0.6215 * temp - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temp * Math.pow(windSpeed, 0.16)).toFixed(1) + " °C";
        } else {
            return "N/A";
        }
    }

    // 4️⃣ - Static Values for Temperature and Wind Speed
    const temp = 18;  // Static temperature in Celsius
    const windSpeed = 10; // Static wind speed in km/h

    // 5️⃣ - Display Wind Chill Result
    document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
});


document.getElementById("copyright").textContent = `© ${new Date().getFullYear()}`;

    
const lastModified = document.lastModified;
document.getElementById("lastModified").textContent = `Last Modified: ${lastModified}`;

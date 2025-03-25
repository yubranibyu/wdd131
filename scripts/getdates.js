
// Get the current year dynamically and display it in the first paragraph
document.getElementById("copyright").textContent = `© ${new Date().getFullYear()}`;

// Get and display the document's last modified date without altering its native format
document.getElementById("lastModified").textContent = `Last modified: ${document.lastModified}`;

for (let i = 0; i < scores.length; i++) {
    console.log(scores[i]);
  }
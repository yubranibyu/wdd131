// Get references to DOM elements
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const templeDiv = document.getElementById("temple-info");

// Toggle navigation menu visibility
menuBtn.addEventListener("click", () => {
    menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
});
const temples = [
  {
    Name: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    Name: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    Name: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    Name: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    Name: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    Name: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    Name: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    Name: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 17",
    area: 30259,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/400x250/buenos-aires-argentina-temple-2012-1021302-wallpaper.jpg"
  },
  {
    Name: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 40900,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/500%2C/0/default"
  },
  {
    Name: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 53000,
    imageUrl:
      "https://www.churchofjesuschrist.org/imgs/df6b96801c9f11ec99eeeeeeac1ea2207e7c517b/full/500%2C/0/default"
  }
];


// Function to display filtered temples
function displayTemples(filteredTemples) {
  templeDiv.innerHTML = ""; // Clear existing content

  filteredTemples.forEach(temple => {
      let templeCard = `
          <div class="temple">
              <p><strong>Name:</strong> ${temple.Name}</p>
              <p><strong>Location:</strong> ${temple.location}</p>
              <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
              <p><strong>Area:</strong> ${temple.area} sq. ft.</p>
              <img class="temple-img" src="${temple.imageUrl}" alt="${temple.Name}" loading="lazy">
          </div>
      `;
      templeDiv.innerHTML += templeCard;
  });
}

// Initial display of all temples
displayTemples(temples);

// Filter function based on navigation selection
document.querySelectorAll("nav ul li a").forEach(link => {
  link.addEventListener("click", event => {
      event.preventDefault();
      const filter = event.target.dataset.filter;

      let filteredTemples = temples;
      if (filter === "old") {
          filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) < 1900);
      } else if (filter === "new") {
          filteredTemples = temples.filter(t => parseInt(t.dedicated.split(",")[0]) > 2000);
      } else if (filter === "large") {
          filteredTemples = temples.filter(t => t.area > 90000);
      } else if (filter === "small") {
          filteredTemples = temples.filter(t => t.area < 10000);
      }
      
      displayTemples(filteredTemples);
  });
});
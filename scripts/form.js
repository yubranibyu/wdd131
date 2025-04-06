const products = [
  { id: "fc-1888", name: "Flux Capacitor" },
  { id: "fc-2050", name: "Power Laces" },
  { id: "fs-1987", name: "Flying Skateboard" },
  { id: "ac-2000", name: "Anti-Gravity Chair" },
  { id: "ar-2022", name: "AR Glasses" }
];

const productSelect = document.querySelector("#product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.id;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

let accordions = document.querySelectorAll("button.accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].onclick = function() {
    this.classList.toggle("active");
    this.classList.toggle("opacity");
    this.nextElementSibling.classList.toggle("show");
    this.nextElementSibling.classList.toggle("opacity");
  };
}
function closeAll() {
  for (let i = 0; i < accordions.length; i++) {
    accordions[i].classList.remove("active");
    accordions[i].nextElementSibling.classList.remove("show");
  }
}
// start of accordion
const acc = document.querySelectorAll(".accordion");

acc.forEach(item => {
  item.addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = `${panel.scrollHeight}px`;
    } 
  });
});
// end of accordion

// start of footer date
document.getElementById('year').innerHTML = new Date().getFullYear();
// end of footer date
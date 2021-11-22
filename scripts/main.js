const nav = document.querySelector("#header nav");
const toggle = document.querySelectorAll("nav .toggle");

// Header variableas
const header = document.querySelector("#header");
const navHeight = header.offsetHeight;

// Links variables
const links = document.querySelectorAll("nav ul li a");

for (const element of toggle) {
  element.addEventListener("click", function () {    
    nav.classList.toggle("isOpen")
  });
}

// Close menu after click on menu
for (const link of links) {
  link.addEventListener("click", function () {
    nav.classList.remove("isOpen")
  });
}

// Srolling effect
window.addEventListener("scroll", function () {
  if(window.scrollY >= navHeight) {
    header.classList.add("has-scroll")
  } else {
    header.classList.remove("has-scroll")
  }
});


// Teslemonial Slider Swiper
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
});

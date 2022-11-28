// animation on menu when scroll
let section = document.querySelectorAll('section');
let menu = document.querySelectorAll('nav ul a');
window.onscroll = () => {
  section.forEach(i => {
    let top = window.scrollY;
    let offset = i.offsetTop - 150;
    let height = i.offsetHeight;
    let id = i.getAttribute('id');
    if (top >= offset && top < offset + height ) {
      menu.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`nav ul a[href*=${id}]`)
          .classList.add('active');
      });
    }
  });
};

// animation on elements when scroll
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);



const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");
const navLink = document.querySelectorAll(".nav-menu-link");
//burger menu open
burger.addEventListener("click", () => {
    ul.classList.toggle("show");
  });

//burger menu close
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);
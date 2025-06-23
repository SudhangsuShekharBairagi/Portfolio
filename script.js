const navBarColor = document.getElementById("navBar");
const menuButton = document.querySelector("#menuBar");
const menuButton2 = document.querySelector(".menuBar2");
const mobileNav = document.querySelector("#mobileNav");
const MenuLiMoblie = document.querySelectorAll(".MenuLiMoblie");
const loader = document.querySelector(".loader");
let nav = document.querySelector(".navClass");
const toggleBtn = document.getElementById("toggle-btn");
const iconToggleMoon = document.querySelector(".fa-moon");
const iconToggleSun = document.querySelector(".fa-sun");
let navbar = document.querySelector(".navClass");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

// loader -----
window.addEventListener("load", () => {
  loader.style.display = "none";
  typeWriter();
});

// load the theme for the local storage ----
window.addEventListener("load", () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
  }
});
// light & drak mode ------
nav.classList.remove("shadow");

iconToggleSun.classList.add("hide");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  iconToggleSun.classList.toggle("hide");
  iconToggleMoon.classList.toggle("hide");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});



MenuLiMoblie.forEach((element) => {
  element.addEventListener("click", () => menuShowAndHide());
});

menuButton.addEventListener("click", () => menuShowAndHide());
menuButton2.addEventListener("click", () => menuShowAndHide());

function menuShowAndHide() {
  mobileNav.classList.toggle("show");
}

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 0) {
    nav.classList.add("shadow");
  } else {
    nav.classList.remove("shadow");
  }
});

const texts = ["Web Developer", "Tech Enthusiast", "Open Source Contributor"];
const typeSpeed = 150;
const delayAfterTyping = 2000;
let textIndex = 0;
let charIndex = 0;

function typeWriter() {
  const currentText = texts[textIndex];
  const typingElement = document.querySelector(".typingAnimation");

  if (charIndex < currentText.length) {
    typingElement.innerHTML += currentText.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, typeSpeed);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(typeWriter, typeSpeed);
    }, delayAfterTyping);
  }
}

let lastScrollTop = 0;
let timeout = null;

window.addEventListener("scroll", () => {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    navbar.classList.add("navbar-hidden");
  } else {
    navbar.classList.remove("navbar-hidden");
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

  if (timeout !== null) {
    clearTimeout(timeout);
  }

  timeout = setTimeout(() => {
    navbar.classList.remove("navbar-hidden");
  }, 150);
});

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");  
    }
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
     
    }
  });
});

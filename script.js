const navBarColor = document.getElementById('navBar');
const menuButton = document.querySelector('#menuBar');
const menuButton2 = document.querySelector('.menuBar2');
const mobileNav = document.querySelector('#mobileNav');
const MenuLiMoblie = document.querySelectorAll('.MenuLiMoblie');
let nav = document.querySelector('.navClass')
nav.classList.remove('shadow');
const toggleBtn = document.getElementById("toggle-btn");
const iconToggleMoon = document.querySelector(".fa-moon"),
iconToggleSun = document.querySelector(".fa-sun");
iconToggleSun.classList.add('hide');
toggleBtn.addEventListener('click', ()=> {
  document.body.classList.toggle('dark-mode');
  iconToggleSun.classList.toggle('hide');
  iconToggleMoon.classList.toggle('hide');
  
  if(document.body.classList.contains('dark-mode')){
    localStorage.setItem("theme", "dark");
  }else {
    localStorage.setItem("theme", "light");
  }
});
window.addEventListener("load", ()=> {
  if(localStorage.getItem("theme") === "dark"){
    document.body.classList.add("dark-mode");
  }
});
// function updateCSSVariable(variable, value) {
//     document.documentElement.style.setProperty(variable, value);
// }

// navBarColor.addEventListener('input', () => {
//     updateCSSVariable('--navBg', navBarColor.value);
//     let color = navBarColor.value;
//     if(color < "#4c2424"){
//         updateCSSVariable('--textColor', '#ffffff');      
        

//             updateCSSVariable('--bodyBg','#1c1a1a');
        
//     }else{
//         updateCSSVariable('--textColor', '#000000');
//         if(color <= '#ffffff'){
//             updateCSSVariable('--bodyBg','#808080');
//         }else{
//             updateCSSVariable('--bodyBg','#ffffff');
//         }
       

//     }
// })

// function updateCSSVariable(variable, value) {
//   document.documentElement.style.setProperty(variable, value);
// }

// function calculateLuminance(hex) {
//   const rgb = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
//   const r = parseInt(rgb[1], 16) / 255;
//   const g = parseInt(rgb[2], 16) / 255;
//   const b = parseInt(rgb[3], 16) / 255;

//   const toLinear = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
//   const lr = toLinear(r);
//   const lg = toLinear(g);
//   const lb = toLinear(b);

//   return 0.2126 * lr + 0.7152 * lg + 0.0722 * lb;
// }

// function isLightColor(hex) {
//   return calculateLuminance(hex) > 0.5;
// }

// navBarColor.addEventListener('input', () => {
//   const color = navBarColor.value;
//   // updateCSSVariable('--navBg', color);
//   updateCSSVariable('--bodyBg', color); 

//   // Check luminance for readability
//   if (isLightColor(color)) {
//     updateCSSVariable('--navBg', '#218cea');
//       updateCSSVariable('--textColor', '#000000');
//       // updateCSSVariable('--bodyBg', '#ffffff');  // Light background when nav is light
//   } else {
//       updateCSSVariable('--navBg', '#1c1a1a');
//       updateCSSVariable('--textColor', '#ffffff');
//       // updateCSSVariable('--bodyBg', '#1c1a1a');  // Dark background when nav is dark
//   }

//   // Example of color scheme adjustments based on the selected nav color
//   if (color === "#4c2424") {  // Specific color lock
//       updateCSSVariable('--bodyBg', '#2b2b2b');
//       updateCSSVariable('--accentColor', '#ff7f7f');
//   } else if (color === "#38bdf8") {  // Another specific color lock
//       updateCSSVariable('--accentColor', '#ffd700');
//   }
// });

MenuLiMoblie.forEach(element => {
    element.addEventListener('click', ()=> menuShowAndHide());
});

menuButton.addEventListener('click', ()=> menuShowAndHide());
menuButton2.addEventListener('click', ()=> menuShowAndHide());

function menuShowAndHide(){
    mobileNav.classList.toggle('show');
}
window.addEventListener('scroll', (e)=> {
   if(window.scrollY > 0){
    nav.classList.add('shadow');
   }else{
    nav.classList.remove('shadow');
   }
   
});


// project-selection


// let wrapper = document.querySelector(".slider-wrapper");
// let slides = document.querySelectorAll(".project-card");
// let index = 0;
// let total = slides.length;

// function updateSlider() {
//   wrapper.style.transform = `translateX(-${index * (slides[0].offsetWidth + 20)}px)`;
// }

// document.querySelector(".slider-arrow.left").addEventListener("click", () => {
//   index = (index > 0) ? index - 1 : total - 1;
//   updateSlider();
// });

// document.querySelector(".slider-arrow.right").addEventListener("click", () => {
//   index = (index + 1) % total;
//   updateSlider();
// });

// // Autoplay
// setInterval(() => {
//   index = (index + 1) % total;
//   updateSlider();
// }, 4000);

// // Swipe gestures for mobile
// let startX = 0;
// wrapper.addEventListener("touchstart", e => {
//   startX = e.touches[0].clientX;
// });
// wrapper.addEventListener("touchend", e => {
//   let endX = e.changedTouches[0].clientX;
//   if (startX - endX > 50) {
//     index = (index + 1) % total;
//     updateSlider();
//   } else if (endX - startX > 50) {
//     index = (index > 0) ? index - 1 : total - 1;
//     updateSlider();
//   }
// });


// // Select necessary elements
// const sliderWrapper = document.querySelector('.slider-wrapper');
// const slides = document.querySelectorAll('.project-card');
// const prevArrow = document.querySelector('.slider-arrow.left');
// const nextArrow = document.querySelector('.slider-arrow.right');
// const totalSlides = slides.length;
// let currentIndex = 0;

// // Set initial state
// let slideWidth = slides[0].offsetWidth;
// let isSwiping = false;
// let swipeStartX = 0;

// // Function to update the slider position
// function updateSliderPosition() {
//   const offset = -currentIndex * slideWidth;
//   sliderWrapper.style.transform = `translateX(${offset}px)`;
// }

// // Function to go to the previous slide
// function prevSlide() {
//   currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
//   updateSliderPosition();
// }

// // Function to go to the next slide
// function nextSlide() {
//   currentIndex = (currentIndex + 1) % totalSlides;
//   updateSliderPosition();
// }

// // Autoplay functionality
// let autoplayInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

// // Stop autoplay on manual interaction
// function stopAutoplay() {
//   clearInterval(autoplayInterval);
//   autoplayInterval = setInterval(nextSlide, 5000); // Restart autoplay
// }

// // Add event listeners to arrows
// prevArrow.addEventListener('click', () => {
//   prevSlide();
//   stopAutoplay();
// });

// nextArrow.addEventListener('click', () => {
//   nextSlide();
//   stopAutoplay();
// });

// // Swipe functionality for mobile
// function handleSwipeStart(e) {
//   isSwiping = true;
//   swipeStartX = e.changedTouches[0].pageX;
// }

// function handleSwipeMove(e) {
//   if (!isSwiping) return;
//   const swipeEndX = e.changedTouches[0].pageX;
//   if (swipeStartX - swipeEndX > 50) {
//     // Swiped left
//     nextSlide();
//     stopAutoplay();
//   } else if (swipeEndX - swipeStartX > 50) {
//     // Swiped right
//     prevSlide();
//     stopAutoplay();
//   }
// }

// function handleSwipeEnd() {
//   isSwiping = false;
// }

// sliderWrapper.addEventListener('touchstart', handleSwipeStart);
// sliderWrapper.addEventListener('touchmove', handleSwipeMove);
// sliderWrapper.addEventListener('touchend', handleSwipeEnd);

// // Handle resize for responsive design
// window.addEventListener('resize', () => {
//   slideWidth = slides[0].offsetWidth;
//   updateSliderPosition();
// });

// // Initial position update
// updateSliderPosition();



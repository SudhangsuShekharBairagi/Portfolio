const navBarColor = document.getElementById('navBar');
const menuButton = document.querySelector('#menuBar');
const menuButton2 = document.querySelector('.menuBar2');
const mobileNav = document.querySelector('#mobileNav');
const MenuLiMoblie = document.querySelectorAll('.MenuLiMoblie');
const loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
  loader.style.display = 'none';
  typeWriter();
})
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




// const text = "Web Developer 💻 | Tech Enthusiast ⚡";
// const typeSpeed = 200;
// const delayAfterTyping = 2000;
// let i = 0;
// function typeWriter() {
//   if(i < text.length){
//     document.querySelector(".typingAnimation").innerHTML += text.charAt(i);
//     i++;
//     setTimeout(typeWriter,typeSpeed);
//   }else{
//     setTimeout(()=> {
//        document.querySelector(".typingAnimation").innerHTML = "";
//        i = 0;
//        typeWriter();
//     }, delayAfterTyping);
//   }
// }
// window.onload = typeWriter;
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
      textIndex = (textIndex + 1) % texts.length; // Move to next item in array
      setTimeout(typeWriter, typeSpeed);
    }, delayAfterTyping);
  }
}

// window.onload = typeWriter;


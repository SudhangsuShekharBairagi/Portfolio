const navBarColor = document.getElementById('navBar');
const menuButton = document.querySelector('#menuBar');
const menuButton2 = document.querySelector('.menuBar2');
const mobileNav = document.querySelector('#mobileNav');
const MenuLiMoblie = document.querySelectorAll('.MenuLiMoblie');
const loader = document.querySelector('.loader');

window.addEventListener('load', ()=>{
  loader.style.display = 'none';
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





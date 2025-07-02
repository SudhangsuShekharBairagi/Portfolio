document.addEventListener("DOMContentLoaded", () => {

  const navBarColor = document.getElementById("navBar");
  const menuButton = document.querySelector("#menuBar");
  const menuButton2 = document.querySelector(".menuBar2");
  const mobileNav = document.querySelector("#mobileNav");
  const MenuLiMoblie = document.querySelectorAll(".MenuLiMoblie");
  const loader = document.querySelector(".loaderContainer");
  
  let nav = document.querySelector(".navClass");
  const toggleBtn = document.getElementById("toggle-btn");
  const iconToggleMoon = document.querySelector(".fa-moon");
  const iconToggleSun = document.querySelector(".fa-sun");
  let navbar = document.querySelector(".navClass");
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("nav a");
  const feedback = document.querySelector("feedback");

  // loader -----
  window.addEventListener("load", () => {
    document.body.classList.remove('loading');
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

// menu button show or hide

  MenuLiMoblie.forEach((element) => {
    element.addEventListener("click", () => menuShowAndHide());
  });

  menuButton.addEventListener("click", () => menuShowAndHide());
  menuButton2.addEventListener("click", () => menuShowAndHide());

  function menuShowAndHide() {
    mobileNav.classList.toggle("show");
    document.body.classList.toggle("no-scroll");
  }

  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
      nav.classList.add("shadow");
    } else {
      nav.classList.remove("shadow");
    }
  });
// typing effect 
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

//scroll effect 
  let lastScrollTop = 0;
 
  window.addEventListener("scroll", () => {
    // console.log(window.pageYOffset);
    const currentScroll =
      window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
      navbar.classList.add("navbar-hidden");
    } else {
      navbar.classList.remove("navbar-hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;


    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
   
      if (pageYOffset + 150 >= sectionTop) {
        current = section.getAttribute("id");
      }
    });
    navLinks.forEach((link) => {
      link.classList.remove("active");

      if (link.getAttribute("href") === "#" + current) {
      
        link.classList.add("active");

      }
    });


    if (window.pageYOffset > 200) {
  document.getElementById("goToTop").classList.remove("hideGoToButton");
} else {
  document.getElementById("goToTop").classList.add("hideGoToButton");
}

  });

  document.getElementById("contactForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const submitButton = document.getElementById("submit");

    // Disable the button and show sending status (optional)
    submitButton.disabled = true;
    submitButton.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        form.reset();
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("⚠️ Something went wrong. Please check your internet connection.");
    } finally {
      // Re-enable the button and restore icon
      submitButton.disabled = false;
      submitButton.innerHTML = `<i class="fa-solid fa-paper-plane"></i>`;
    }
  });
  document.getElementById("goToTop").addEventListener("click", () => {
  document.getElementById("home").scrollIntoView({ behavior: "smooth" });
});
  
// about section image move 
  const container = document.querySelector('.aboutMe');
  const image = document.querySelector('.aboutImg');

  container.addEventListener('mousemove', (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within container
    const y = e.clientY - rect.top;  // y position within container

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -20; // max 20deg tilt
    const rotateY = ((x - centerX) / centerX) * 20;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });

  container.addEventListener('mouseleave', () => {
    image.style.transform = 'rotateX(0deg) rotateY(0deg)';
  });
});



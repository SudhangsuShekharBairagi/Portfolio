document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const header = document.querySelector(".site-header");
  const toggleBtn = document.getElementById("toggle-btn");
  const iconMoon = document.querySelector(".fa-moon");
  const iconSun = document.querySelector(".fa-sun");
  const menuButton = document.getElementById("menuBar");
  const mobileNav = document.getElementById("mobileNav");
  const closeMenu = document.getElementById("navButton");
  const navLinks = document.querySelectorAll(".site-nav a, .mobile-nav-links a");
  const revealItems = document.querySelectorAll(".reveal");
  const sections = document.querySelectorAll("section[id]");
  const goToTop = document.getElementById("goToTop");
  const loader = document.querySelector(".loaderContainer");
  const contactForm = document.getElementById("contactForm");
  const submitButton = document.getElementById("submit");
  const originalSubmitContent = submitButton.innerHTML;
  const texts = ["React Developer", "Spring Boot Enthusiast", "Full-Stack Creator"];
  const typeSpeed = 100;
  const deleteSpeed = 70;
  const delayAfterTyping = 2000;
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let lastScrollTop = 0;

  window.addEventListener("load", () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
      body.classList.add("light-mode");
    }
    updateThemeIcon();
    finishLoader();
    typeWriter();
    revealOnScroll();
    handleScroll();
  });

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light-mode");
    const isLight = body.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
    updateThemeIcon();
  });

  function updateThemeIcon() {
    const isLight = body.classList.contains("light-mode");
    iconMoon.classList.toggle("hide", isLight);
    iconSun.classList.toggle("hide", !isLight);
  }

  menuButton.addEventListener("click", toggleMobileMenu);
  closeMenu.addEventListener("click", toggleMobileMenu);

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (mobileNav.classList.contains("show")) {
        toggleMobileMenu();
      }
    });
  });

  function toggleMobileMenu() {
    const isOpen = mobileNav.classList.toggle("show");
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
    body.classList.toggle("no-scroll", isOpen);
  }

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop && currentScroll > 120) {
      header.classList.add("navbar-hidden");
    } else {
      header.classList.remove("navbar-hidden");
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;

    handleScroll();
  });

  function handleScroll() {
    if (window.scrollY > 20) {
      header.classList.add("shadow");
    } else {
      header.classList.remove("shadow");
    }

    if (window.pageYOffset > 300) {
      goToTop.classList.add("show");
    } else {
      goToTop.classList.remove("show");
    }

    updateActiveNav();
  }

  function updateActiveNav() {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset + 180 >= sectionTop) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  goToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.innerHTML = `<i class="fa-solid fa-spinner fa-spin"></i>`;

    try {
      const response = await fetch(contactForm.action, {
        method: contactForm.method,
        body: new FormData(contactForm),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("✅ Message sent successfully!");
        contactForm.reset();
      } else {
        alert("❌ Failed to send message. Please try again later.");
      }
    } catch (error) {
      alert("⚠️ Something went wrong. Please check your internet connection.");
    } finally {
      submitButton.disabled = false;
      submitButton.innerHTML = originalSubmitContent;
    }
  });

  function typeWriter() {
    const typingElement = document.querySelector(".hero-eyebrow");
    const currentText = texts[textIndex];

    if (isDeleting) {
      typingElement.textContent = currentText.slice(0, charIndex - 1);
      charIndex -= 1;

      if (charIndex < 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        charIndex = 0;
        setTimeout(typeWriter, 250);
        return;
      }
      setTimeout(typeWriter, deleteSpeed);
    } else {
      typingElement.textContent = currentText.slice(0, charIndex + 1);
      charIndex += 1;

      if (charIndex > currentText.length) {
        isDeleting = true;
        setTimeout(typeWriter, delayAfterTyping);
        return;
      }
      setTimeout(typeWriter, typeSpeed);
    }
  }

  function revealOnScroll() {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      revealItems.forEach((element) => element.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    revealItems.forEach((element) => observer.observe(element));
  }

  function finishLoader() {
    loader.classList.add('fade-out');
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }
});

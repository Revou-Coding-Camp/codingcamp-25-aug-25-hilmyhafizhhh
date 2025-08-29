// NAVBAR TOGGLE (Hamburger)
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", toggleNav);

// klik di luar navbar → close
document.addEventListener("click", (e) => {
  if (navbar.classList.contains("active")) {
    if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
      navbar.classList.remove("active");
      mobileNav.classList.remove("hamburger-active");
    }
  }
});

// klik link di sidebar → close juga
const sidebarLinks = document.querySelectorAll(".menubar ul li a");
sidebarLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    mobileNav.classList.remove("hamburger-active");
  });
});

// NAVBAR BLUR & SOLID on SCROLL
const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// USERNAME PROMPT
const username = document.querySelector("#username");
let name = prompt("Masukkan nama kamu:") || "Guest";
username.textContent = name;

// ACTIVE LINK HIGHLIGHT per SECTION
const navLinks = document.querySelectorAll("nav ul li a");
const sections = document.querySelectorAll("section, header");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.remove("active-link");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active-link");
          }
        });
      }
    });
  },
  { threshold: 0.6 }
);

sections.forEach((section) => observer.observe(section));

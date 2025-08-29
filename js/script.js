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
  { threshold: 0.3 }
);

sections.forEach((section) => observer.observe(section));

// Handling form submission
// Form validation & output
const contactForm = document.getElementById("contactForm");
const formOutput = document.getElementById("formOutput");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validasi sederhana
  if (!name || !email || !message) {
    alert("Please fill in all fields.");
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    alert("Please enter a valid email.");
    return;
  }

  // Tampilkan hasil
  formOutput.style.display = "block";
  formOutput.innerHTML = `
    <h3>Message Summary</h3>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  // Reset form
  contactForm.reset();
});

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};

mobileNav.addEventListener("click", () => toggleNav());

document.addEventListener("click", (e) => {
  if (navbar.classList.contains("active")) {
    if (!navbar.contains(e.target) && !mobileNav.contains(e.target)) {
      navbar.classList.remove("active");
      mobileNav.classList.remove("hamburger-active");
    }
  }
});

const username = document.querySelector("#username");

let name = prompt("Masukkan nama kamu:") || "Guest";
username.textContent = name;

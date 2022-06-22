window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

const serviceModals = document.querySelectorAll(".education-modal");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function (modalClick) {
  serviceModals[modalClick].classList.add("active");
};

learnmoreBtns.forEach((learnmoreBtn, i) => {
  learnmoreBtn.addEventListener("click", () => {
    modal(i);
  });
});
modalCloseBtns.forEach((modalCloseBtn) => {
  modalCloseBtn.addEventListener("click", () => {
    serviceModals.forEach((modalView) => {
      modalView.classList.remove("active");
    });
  });
});
const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
};

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});
portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

scrollTopBtn.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  navigation.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});
navItems.forEach((navItems) => {
  navItems.addEventListener("click", () => {
    navigation.classList.remove("active");
  });
});

ScrollReveal({
  reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(".home .info h2, .section-title-01, section-title-02", {
  delay: 500,
  origin: "left",
});
ScrollReveal().reveal(".home .info h3, .home .info p, .about-info .btn", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".media-icons i,.contact-left li", {
  delay: 500,
  origin: "left",
  interval: 200,
});
ScrollReveal().reveal(".home .info .btn", { delay: 700, origin: "bottom" });
ScrollReveal().reveal(".home-img, about-img", { delay: 500, origin: "bottom" });
ScrollReveal().reveal(".about .description, .copy-right", {
  delay: 600,
  origin: "right",
});
ScrollReveal().reveal(".about .education-list li", {
  delay: 500,
  origin: "right",
  interval: 200,
});
ScrollReveal().reveal(".education, .portfolio .img-card", {
  delay: 800,
  origin: "bottom",
  interval: 200,
});

const myTags = [
  "JavaScript",
  "CSS",
  "HTML",
  "C",
  "C++",
  "React",
  "Python",
  "git",
  "Node.js",
  "OpenCV",
  "MySQL",
  "jQuery",
  "JavaScript",
  "CSS",
  "HTML",
  "C",
  "C++",
  "React",
  "Python",
  "git",
  "Node.js",
  "OpenCV",
  "MySQL",
  "jQuery",
];

var tagCloud = TagCloud(".cloud", myTags, {
  radius: 500,
  maxSpeed: "fast",
  initSpeed: "fast",

  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,

  // interact with cursor move on mouse out
  keep: true,
});

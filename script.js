// =====================================
// CATERGOLDEN SERVICES LLP
// script.js
// =====================================

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Back to Top Button
const backToTop = document.querySelector(".back-to-top");

window.addEventListener("scroll", () => {

  if (backToTop) {

    if (window.scrollY > 400) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }

  }

});

// Quote Form
const form = document.querySelector(".quote-form");

if (form) {

  form.addEventListener("submit", function (e) {

    e.preventDefault();

    alert("Thank you for contacting CATERGOLDEN SERVICES LLP. We will contact you shortly.");

    form.reset();

  });

}

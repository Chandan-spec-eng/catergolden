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

// ===============================
// Quote Form → Google Sheet
// ===============================

const form = document.querySelector(".quote-form");

if (form) {

  form.addEventListener("submit", async function (e) {

    e.preventDefault();

    const data = {
      name: form.querySelector('input[placeholder="Your Name"]').value,
      company: form.querySelector('input[placeholder="Company Name"]').value,
      mobile: form.querySelector('input[placeholder="Mobile Number"]').value,
      email: form.querySelector('input[placeholder="Email Address"]').value,
      guests: form.querySelector('input[placeholder="Number of Guests"]').value,
      message: form.querySelector("textarea").value
    };

    try {

      await fetch("https://script.google.com/macros/s/AKfycbw70goKhFv08A1OAa25qNNCmw-S92A6Yp2BVwdwXdDwJJdXIE8qRDrsBn3HPb_z2fIL7w/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      alert("Thank you! Your enquiry has been submitted successfully.");

      form.reset();

    } catch (error) {

      alert("Something went wrong. Please try again.");
      console.error(error);

    }

  });

}

  });

}

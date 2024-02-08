//! -------------------- FOR SKILLS TIMELINE --------------------

window.onload = function () {
  // Show content for the first item by default
  showContent(1);
};

function showContent(index) {
  // Get all timeline items
  let items = document.querySelectorAll(".timeline-item");

  // Remove 'active' class from all items
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' class to the clicked item
  items[index - 1].classList.add("active");

  // Hide all content divs
  let allContent = document.querySelectorAll(".content");
  allContent.forEach(function (contentDiv) {
    contentDiv.style.display = "none";
  });

  // Show content based on itemId
  let contentDiv = document.getElementById("content-" + index);
  if (contentDiv) {
    contentDiv.style.display = "block";
  }
}

//! -------------------- FOR EXPERIENCE TAB --------------------

document.addEventListener("DOMContentLoaded", function () {
  const frontendDeveloper = document.getElementById("frontend-developer");
  const education = document.getElementById("education");
  const aboutInternship = document.getElementById("about-internship");
  const educationDetails = document.getElementById("education-details");

  frontendDeveloper.addEventListener("click", function () {
    // Check if Frontend Developer tab already has the active class
    if (!frontendDeveloper.classList.contains("active")) {
      aboutInternship.style.display = "block";
      educationDetails.style.display = "none";

      // Toggle 'active' class for both tabs
      frontendDeveloper.classList.add("active");
      education.classList.remove("active");

      // Toggle background color for active tab
      // frontendDeveloper.style.backgroundColor = "#007bff";
      education.style.backgroundColor = "";
    }
  });

  education.addEventListener("click", function () {
    // Check if Education tab already has the active class
    if (!education.classList.contains("active")) {
      aboutInternship.style.display = "none";
      educationDetails.style.display = "block";

      // Toggle 'active' class for both tabs
      education.classList.add("active");
      frontendDeveloper.classList.remove("active");

      // Toggle background color for active tab
      // education.style.backgroundColor = "#007bff";
      frontendDeveloper.style.backgroundColor = "";
    }
  });

  // Ensure the default tab (Frontend Developer) has the active class and background color
  frontendDeveloper.classList.add("active");
  // frontendDeveloper.style.backgroundColor = "#007bff";

  // Ensure education details are hidden initially
  educationDetails.style.display = "none";
});

//! -------------------- FOR FOOTER YEAR --------------------

function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}
const yearSpan = document.getElementById("year");
yearSpan.innerHTML = getCurrentYear();

//! -------------------- FOR PROJECT --------------------

document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.querySelector(".show-more-btn");
  const additionalBoxes = document.querySelectorAll(".additional-box");

  showMoreButton.addEventListener("click", function () {
    additionalBoxes.forEach((box) => {
      if (box.style.display === "none") {
        box.style.display = "flex";
        showMoreButton.textContent = "Show Less";
      } else {
        box.style.display = "none";
        showMoreButton.textContent = "Show More";
      }
    });
  });
});

//! -------------------- FOR CONTACT FORM --------------------

const scriptURL =
  "https://script.google.com/macros/s/AKfycbwrRmZYx8lsj0VTNbc9pOHj_4SsE_12SzWmUBKaSflAcWdlegSLDYaSBFalUQRIJ4Fs/exec";
const form = document.forms["submit-to-google-sheet"];
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      message.innerHTML = "Message Sent Successfully";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

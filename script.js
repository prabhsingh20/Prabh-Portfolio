window.onload = function () {
  // Show content for the first item by default
  showContent(1);
};

function showContent(index) {
  // Get all timeline items
  var items = document.querySelectorAll(".timeline-item");

  // Remove 'active' class from all items
  items.forEach((item) => {
    item.classList.remove("active");
  });

  // Add 'active' class to the clicked item
  items[index - 1].classList.add("active");

  // Hide all content divs
  var allContent = document.querySelectorAll(".content");
  allContent.forEach(function (contentDiv) {
    contentDiv.style.display = "none";
  });

  // Show content based on itemId
  var contentDiv = document.getElementById("content-" + index);
  if (contentDiv) {
    contentDiv.style.display = "block";
  }
}

// document.addEventListener("DOMContentLoaded", function () {
//   const frontendDeveloper = document.getElementById("frontend-developer");
//   const education = document.getElementById("education");
//   const aboutInternship = document.getElementById("about-internship");
//   const educationDetails = document.getElementById("education-details");

//   frontendDeveloper.addEventListener("click", function () {
//     aboutInternship.style.display = "block";
//     educationDetails.style.display = "none";
//   });

//   education.addEventListener("click", function () {
//     aboutInternship.style.display = "none";
//     educationDetails.style.display = "block";
//   });

//   // Ensure education details are hidden initially
//   educationDetails.style.display = "none";
// });

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
      frontendDeveloper.style.backgroundColor = "#007bff";
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
      education.style.backgroundColor = "#007bff";
      frontendDeveloper.style.backgroundColor = "";
    }
  });

  // Ensure the default tab (Frontend Developer) has the active class and background color
  frontendDeveloper.classList.add("active");
  frontendDeveloper.style.backgroundColor = "#007bff";

  // Ensure education details are hidden initially
  educationDetails.style.display = "none";
});

function getCurrentYear() {
  const now = new Date();
  return now.getFullYear();
}
const yearSpan = document.getElementById("year");
yearSpan.innerHTML = getCurrentYear();

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
      let computedStyle = window.getComputedStyle(box);
      if (computedStyle.display === "none") {
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
      message.innerHTML =
        "Message Sent Successfully <span class='tick'>✔</span>";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

//! -------------------- FOR ABOUT US BUTTON SHAKE --------------------

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector(".btn-1");

  function addDelay() {
    btn.style.animationDelay = "4s"; // Set delay to 4s after first iteration
  }

  function removeAnimation() {
    btn.style.animation = "none"; // Remove animation after it completes
    setTimeout(function () {
      btn.style.animation = "shake 1s infinite"; // Add animation after a delay
    }, 4000); // Delay for 4 seconds
  }

  function stopAnimation() {
    btn.style.animation = "none"; // Stop animation when hovering
  }

  function restartAnimation() {
    btn.style.animation = "shake 1s infinite"; // Restart animation when not hovering
  }

  // Add delay after the first iteration
  btn.addEventListener("animationiteration", addDelay);

  // Remove animation after it completes and add it back after a delay
  btn.addEventListener("animationend", removeAnimation);

  // Stop animation when hovering
  btn.addEventListener("mouseover", stopAnimation);

  // Restart animation when not hovering
  btn.addEventListener("mouseout", restartAnimation);
});

//! -------------------- FOR CELEBRATION ANIMATION --------------------

document
  .getElementsByClassName("confetti-button")[0]
  .addEventListener("click", () => {
    // confetti();
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 600;
    let container = document.getElementsByClassName("button-wrapper")[0];
    container.appendChild(canvas);

    let confetti_button = confetti.create(canvas);
    confetti_button().then(() => container.removeChild(canvas));
  });

//! -------------------- FOR CLOUD ANIMATION --------------------
function generateText() {
  let cloud = document.querySelector(".cloud");
  let text = "I love to create bugs that are unsolvable";
  let words = text.split(" ");
  let delay = -3;

  words.forEach(function (word, index) {
    let e = document.createElement("div");
    // let left = Math.floor(Math.random() * 220);
    // let left = Math.floor(Math.random() * 240);
    let left = Math.floor(Math.random() * 260);
    let size = Math.random() * 1.5;

    e.classList.add("text");
    cloud.appendChild(e);
    e.innerText = word;
    e.style.left = left + "px";
    e.style.fontSize = 0.7 + size + "rem";
    // e.style.fontSize = 0.5 + size + "em";
    e.style.animationDelay = delay + index * 1 + "s"; // Adjust this value for delay between words
  });
}

generateText();

//! -------------------- FOR SKILLS TIMELINE --------------------

window.onload = function () {
  showContent(1);
};

function showContent(index) {
  let items = document.querySelectorAll(".timeline-item");

  items.forEach((item) => {
    item.classList.remove("active");
  });

  items[index - 1].classList.add("active");

  let allContent = document.querySelectorAll(".content");
  allContent.forEach(function (contentDiv) {
    contentDiv.style.display = "none";
  });

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
    if (!frontendDeveloper.classList.contains("active")) {
      aboutInternship.style.display = "block";
      educationDetails.style.display = "none";

      frontendDeveloper.classList.add("active");
      education.classList.remove("active");

      education.style.backgroundColor = "";
    }
  });

  education.addEventListener("click", function () {
    if (!education.classList.contains("active")) {
      aboutInternship.style.display = "none";
      educationDetails.style.display = "block";

      education.classList.add("active");
      frontendDeveloper.classList.remove("active");

      frontendDeveloper.style.backgroundColor = "";
    }
  });

  frontendDeveloper.classList.add("active");

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
const subBtn = document.getElementById("subBtn");
const loader = document.getElementById("loader");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  loader.style.display = "block";
  subBtn.style.display = "none";
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      loader.style.display = "none";
      subBtn.style.display = "block";
      message.innerHTML =
        "Message Sent Successfully <span class='tick'>✔</span>";
      setTimeout(function () {
        message.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => {
      loader.style.display = "none";
      subBtn.style.display = "block";
      console.error("Error!", error.message);
    });
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

document
  .getElementsByClassName("confetti-button-two")[0]
  .addEventListener("click", () => {
    // confetti();
    let canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 500;
    let container = document.getElementsByClassName("button-wrapper-two")[0];
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

//! -------------------- FOR AGE CALCULATION --------------------

function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}

const birthdate = "2000-06-16";
const age = calculateAge(birthdate);
document.getElementById("age").innerText = age;

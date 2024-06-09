const styleSwitcherToggle = document.querySelector(".style-switcher-toggle");
styleSwitcherToggle.addEventListener("click", () => {
  document.querySelector(".style-switcher").classList.toggle("open");
});

window.addEventListener("scroll", () => {
  if (document.querySelector(".style-switcher").classList.contains("open")) {
    document.querySelector(".style-switcher").classList.remove("open");
  }
});

const alternateStyle = document.querySelectorAll(".alternate-style");
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute("title")) {
      style.removeAttribute("disabled");
    } else {
      style.setAttribute("disabled", "true");
    }
  });
}

const dayNight = document.querySelector(".day-night");

dayNight.addEventListener("click", () => {
  const icon = dayNight.querySelector("em");
  icon.classList.toggle("fa-sun");
  icon.classList.toggle("fa-moon");
  document.body.classList.toggle("dark");
});

window.addEventListener("load", () => {
  const icon = dayNight.querySelector("em");
  if (document.body.classList.contains("dark")) {
    icon.classList.add("fa-sun");
    icon.classList.remove("fa-moon");
  } else {
    icon.classList.add("fa-moon");
    icon.classList.remove("fa-sun");
  }
});

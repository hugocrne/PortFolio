var typed = new Typed(".typing", {
  strings: ["", "Developpeur Web", "Developpeur Android", "Developpeur Ios"],
  typeSpeed: 150,
  backSpeed: 60,
  loop: true,
});

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSelection = document.querySelectorAll(".section"),
  totalSelection = allSelection.length;

for (let i = 0; i < totalNavList; i++) {
  removeBackSection();
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSelection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.add("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.toggle("open");
  }
}

const asideLinks = document.querySelectorAll(".aside a");
asideLinks.forEach((link) => {
  link.addEventListener("click", () => {
    aside.classList.remove("open");
  });
});

function toggleDescription(descriptionId) {
  var description = document.getElementById(descriptionId);
  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
    description.classList.add("show");
  } else {
    if (description.classList.contains("show")) {
      description.classList.remove("show");
      description.classList.add("hidden");
    }
  }
}

var portfolioImages = document.querySelectorAll(".portfolio-img");
portfolioImages.forEach(function (image, index) {
  image.addEventListener("click", function () {
    if (document.getElementById("portfolio-description-1")) {
      toggleDescription("portfolio-description-1");
    }
    if (document.getElementById("portfolio-description-2")) {
      toggleDescription("portfolio-description-2");
    }
    if (document.getElementById("portfolio-description-3")) {
      toggleDescription("portfolio-description-3");
    }
    if (document.getElementById("portfolio-description-4")) {
      toggleDescription("portfolio-description-4");
    }
    if (document.getElementById("portfolio-description-5")) {
      toggleDescription("portfolio-description-5");
    }
    if (document.getElementById("portfolio-description-6")) {
      toggleDescription("portfolio-description-6");
    }
  });
});

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/PHP/main.php", true);

    xhr.onload = function () {
      if (xhr.status === 200) {
        if (xhr.responseText === "success") {
          alert("Email envoyé avec succès!");
        } else {
          alert("Échec de l'envoi de l'email.");
        }
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    };

    xhr.send(formData);
  });

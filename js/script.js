var typed = new Typed(".typing", {
    strings: ["", "Developpeur", "Developpeur Web", "Developpeur Front-end", "Developpeur Mobile"],
    typeSpeed: 150,
    BackSpeed: 60,
    loop: true
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
        if (target === navList[i].querySelector("a").getAttribute("href").split("#")[1]) {
            navList[i].querySelector("a").classList.add("active");
        }
    }
}

document.querySelector(".hire-me").addEventListener("click", function () {
    const sectionIndex = this.getAttribute("data-section-index");
    //console.log(sectionIndex);
    showSection(this);
    updateNav(this);
    removeBackSection();
    addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
    aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
    asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
    aside.classList.add("open"); // Utiliser la méthode add() pour ajouter une classe
    navTogglerBtn.classList.toggle("open");
    for (let i = 0; i < totalSelection; i++) {
        allSelection[i].classList.toggle("open");
    }
}

const asideLinks = document.querySelectorAll(".aside a");
asideLinks.forEach(link => {
    link.addEventListener("click", () => {
        aside.classList.remove("open"); // Fermer le aside en supprimant la classe "open"
    });
});

document.getElementById("boutonCV").addEventListener("click", function() {
    const link = document.createElement("a");
    link.setAttribute("href", "images/CVHugoCRENEAU.pdf");
    link.setAttribute("download", "");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

function toggleDescription(portfolioId) {
    var description = document.getElementById(portfolioId);
    description.classList.toggle("show");
}


// Appel initial pour fermer toutes les descriptions au chargement de la page
toggleDescription("portfolio-1");
toggleDescription("portfolio-2");
toggleDescription("portfolio-3");
toggleDescription("portfolio-4");
toggleDescription("portfolio-5");
toggleDescription("portfolio-6");

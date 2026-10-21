// =============================
// 1. MENU MOBILE
// =============================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");

    menuBtn.textContent = isOpen ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", isOpen);
});


// =============================
// 2. FERMER LE MENU
// =============================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuBtn.textContent = "☰";
        menuBtn.setAttribute("aria-expanded", "false");
    });
});


// =============================
// 3. ANNÉE AUTOMATIQUE
// =============================

const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();


// =============================
// 4. FORMULAIRE DE CONTACT
// =============================

const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        formNote.textContent = "Veuillez remplir tous les champs.";
        return;
    }

    // IMPORTANT :
    // Remplace cette adresse par ton adresse e-mail.
    const recipient = "TON_EMAIL@example.com";

    const subject = encodeURIComponent(
        "Contact depuis mon portfolio"
    );

    const body = encodeURIComponent(
        "Bonjour,\n\n" +
        message +
        "\n\nNom : " + name +
        "\nE-mail : " + email
    );

    formNote.textContent =
        "Préparation de votre message...";

    window.location.href =
        "mailto:" + recipient +
        "?subject=" + subject +
        "&body=" + body;

});


// =============================
// 5. ANIMATION AU SCROLL
// =============================

const animatedElements = document.querySelectorAll(
    ".skill-card, .project-card, .about-card"
);

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedElements.forEach(function (element) {

        element.classList.add("reveal");

        observer.observe(element);

    });

}
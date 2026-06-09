const whatsappNumber = "556392386749";
const whatsappMessage = "Olá! Gostaria de agendar uma avaliação com a Dra. Mayara Cabral na Clínica Zafier.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", whatsappUrl);
});

function setupAssetImages() {
    document.querySelectorAll("img[data-srcs]").forEach((image) => {
        const sources = image.dataset.srcs.split("|").map((source) => source.trim()).filter(Boolean);
        let index = -1;

        const loadNext = () => {
            index += 1;
            if (index >= sources.length) {
                image.classList.add("asset-failed");
                return;
            }

            image.src = sources[index];
        };

        image.addEventListener("load", () => {
            image.classList.add("asset-loaded");
            image.classList.remove("asset-failed");
        });

        image.addEventListener("error", loadNext);
        loadNext();
    });
}

setupAssetImages();

const header = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("#nav-menu");

function closeMenu() {
    if (!menuButton || !navMenu) return;
    navMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Abrir menu");
    menuButton.innerHTML = '<span data-lucide="menu" aria-hidden="true"></span>';
    if (window.lucide) window.lucide.createIcons();
}

if (menuButton && navMenu) {
    menuButton.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        document.body.classList.toggle("menu-open", isOpen);
        menuButton.setAttribute("aria-expanded", String(isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
        menuButton.innerHTML = `<span data-lucide="${isOpen ? "x" : "menu"}" aria-hidden="true"></span>`;
        if (window.lucide) window.lucide.createIcons();
    });
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
        const targetId = anchor.getAttribute("href");
        const target = targetId && document.querySelector(targetId);

        if (!target) return;
        event.preventDefault();
        closeMenu();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
});

document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
        const item = button.closest(".faq-item");
        const isOpen = item.classList.toggle("open");
        button.setAttribute("aria-expanded", String(isOpen));
    });
});

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
        });
    }, {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px"
    });

    revealElements.forEach((element) => revealObserver.observe(element));
} else {
    revealElements.forEach((element) => element.classList.add("in-view"));
}

const navLinks = document.querySelectorAll(".nav-menu a");
const sections = Array.from(navLinks)
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

function updateHeader() {
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 24);
}

function updateActiveLink() {
    let current = null;
    sections.forEach((section) => {
        if (section.offsetTop - 130 <= window.scrollY) current = section;
    });

    navLinks.forEach((link) => {
        link.classList.toggle("active", current && link.getAttribute("href") === `#${current.id}`);
    });
}

window.addEventListener("scroll", () => {
    updateHeader();
    updateActiveLink();
}, { passive: true });

window.addEventListener("resize", () => {
    if (window.innerWidth > 1020) closeMenu();
}, { passive: true });

updateHeader();
updateActiveLink();

window.addEventListener("load", () => {
    if (window.lucide) window.lucide.createIcons();
});

if (window.lucide) window.lucide.createIcons();

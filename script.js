const whatsappNumber = "5563992725055";
const whatsappMessage = "Olá! Gostaria de agendar um atendimento no Salva Beauty.";
const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

document.querySelectorAll("[data-whatsapp]").forEach((link) => {
    link.setAttribute("href", whatsappUrl);
});

function setupAssetImages() {
    const images = Array.from(document.querySelectorAll("img[data-srcs]"));

    const prepareImage = (image) => {
        if (image.dataset.assetPrepared === "true") return;
        image.dataset.assetPrepared = "true";

        const sources = image.dataset.srcs.split("|").map((source) => source.trim()).filter(Boolean);
        let index = -1;

        const loadNext = () => {
            index += 1;
            if (index >= sources.length) {
                image.classList.add("asset-failed");
                const slide = image.closest("[data-carousel-slide]");
                if (slide) {
                    slide.hidden = true;
                    document.dispatchEvent(new CustomEvent("carousel-assets-changed"));
                }
                return;
            }

            image.src = sources[index];
        };

        image.addEventListener("load", () => {
            image.classList.add("asset-loaded");
            image.classList.remove("asset-failed");
            const slide = image.closest("[data-carousel-slide]");
            if (slide) {
                slide.hidden = false;
                document.dispatchEvent(new CustomEvent("carousel-assets-changed"));
            }
        });

        image.addEventListener("error", loadNext);
        loadNext();
    };

    if ("IntersectionObserver" in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                prepareImage(entry.target);
                observer.unobserve(entry.target);
            });
        }, {
            rootMargin: "520px 0px"
        });

        images.forEach((image) => {
            const hasHiddenFallback = image.classList.contains("doctor-photo") || image.classList.contains("doctor-avatar");
            if (hasHiddenFallback) {
                prepareImage(image);
                return;
            }
            imageObserver.observe(image);
        });
    } else {
        images.forEach(prepareImage);
    }
}

function setupClinicCarousels() {
    document.querySelectorAll("[data-carousel]").forEach((carousel) => {
        const prevButton = carousel.querySelector("[data-carousel-prev]");
        const nextButton = carousel.querySelector("[data-carousel-next]");
        const dotsWrap = carousel.querySelector("[data-carousel-dots]");
        let slides = [];
        let activeIndex = 0;
        let touchStartX = null;

        carousel.setAttribute("tabindex", "0");

        function visibleSlides() {
            return Array.from(carousel.querySelectorAll("[data-carousel-slide]")).filter((slide) => !slide.hidden);
        }

        function setActive(nextIndex) {
            if (!slides.length) return;
            activeIndex = (nextIndex + slides.length) % slides.length;

            slides.forEach((slide, index) => {
                slide.classList.toggle("is-active", index === activeIndex);
            });

            dotsWrap?.querySelectorAll(".carousel-dot").forEach((dot, index) => {
                dot.classList.toggle("is-active", index === activeIndex);
                dot.setAttribute("aria-pressed", String(index === activeIndex));
            });
        }

        function rebuildDots() {
            slides = visibleSlides();

            if (!slides.length) {
                carousel.hidden = true;
                return;
            }

            carousel.hidden = false;
            carousel.classList.toggle("has-single-slide", slides.length < 2);
            activeIndex = Math.min(activeIndex, slides.length - 1);

            if (dotsWrap) {
                dotsWrap.innerHTML = "";
                slides.forEach((_, index) => {
                    const dot = document.createElement("button");
                    dot.className = "carousel-dot";
                    dot.type = "button";
                    dot.setAttribute("aria-label", `Ver foto ${index + 1}`);
                    dot.setAttribute("aria-pressed", "false");
                    dot.addEventListener("click", () => setActive(index));
                    dotsWrap.appendChild(dot);
                });
            }

            setActive(activeIndex);
        }

        prevButton?.addEventListener("click", () => setActive(activeIndex - 1));
        nextButton?.addEventListener("click", () => setActive(activeIndex + 1));

        carousel.addEventListener("keydown", (event) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                setActive(activeIndex - 1);
            }
            if (event.key === "ArrowRight") {
                event.preventDefault();
                setActive(activeIndex + 1);
            }
        });

        carousel.addEventListener("touchstart", (event) => {
            touchStartX = event.touches[0]?.clientX ?? null;
        }, { passive: true });

        carousel.addEventListener("touchend", (event) => {
            if (touchStartX === null) return;
            const touchEndX = event.changedTouches[0]?.clientX ?? touchStartX;
            const distance = touchEndX - touchStartX;
            touchStartX = null;

            if (Math.abs(distance) < 42) return;
            setActive(distance > 0 ? activeIndex - 1 : activeIndex + 1);
        }, { passive: true });

        document.addEventListener("carousel-assets-changed", rebuildDots);
        rebuildDots();
    });
}

setupClinicCarousels();
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

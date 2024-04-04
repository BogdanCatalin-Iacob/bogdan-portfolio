// slides variables
let slideIndex = 1;
showSlides(slideIndex);

// navbar link active
let navLinks = document.getElementsByClassName('nav-link');

for (let link of navLinks){
    link.addEventListener('click', () => {
        let current = document.getElementsByClassName('active')[0];
        current.classList.remove('active');
        link.classList.add('active');
    });
}


// mobile nav variables
const mobileHeading = document.getElementsByClassName("mobile-heading")[0];
const menuBtn = document.getElementsByClassName("hamburger")[0];
const mobileMenu = document.getElementById("aside");

// mail form variables
const modal = document.getElementsByClassName("mail-confirmation")[0];
const modalClose = document.getElementById("close-btn");
const contactForm = document.getElementById("contact-form");

/**
 * Shows the current / active slide
 * @param {int} n - slide number
 */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

/**
 * Shows the slides by clicking the dots
 * @param {int} n - slide number
 */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("hero-slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-slide");
    }

    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].classList.add("active-slide");
}
// set interval for hero slide images
setInterval(plusSlides, 5000, 1);

/**
 * Toggle mobile menu on / off screen
 */
function toggleMobileMenu() {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");

    if (mobileMenu.classList.contains("is-active")) {
        mobileHeading.style.visibility = "hidden";
    } else {
        mobileHeading.style.visibility = "visible";
    }
}

const navList = document.getElementsByClassName("nav-link");
[...navList].forEach(element => {
    element.addEventListener("click", () => {
        menuBtn.classList.remove("is-active");
        mobileMenu.classList.remove("is-active");
    });
});

// form mail confirmation
contactForm.addEventListener("submit", (e) => {
    modal.style.display = "block";
    contactForm.reset();
});

modalClose.onclick = () => {
    modal.style.display = "none";
}

menuBtn.addEventListener("click", toggleMobileMenu);
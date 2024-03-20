let slideIndex = 1;
showSlides(slideIndex);

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


// hamburger menu icon toggle
const menuBtn = document.getElementsByClassName("hamburger")[0];
const mobileMenu = document.getElementById("aside");
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("is-active");
    mobileMenu.classList.toggle("is-active");
});
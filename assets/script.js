const slides = [
    "./assets/images/slideshow/slide1.jpg",
    "./assets/images/slideshow/slide2.jpg",
    "./assets/images/slideshow/slide3.jpg",
    "./assets/images/slideshow/slide4.jpg",
];

const taglines = [
    "Impressions tous formats <span>en boutique et en ligne</span>",
    "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    "Autocollants <span>avec découpe laser sur mesure</span>",
];

var slideIdx = 0;
var taglineIdx = 0;

function initslider() {
    document.querySelectorAll(".arrow").forEach(function (elt) {
        elt.addEventListener("click", function (event) {
            if (event.target.classList.contains("arrow-left")) {
                console.log("LEFT");
                if (slideIdx <= 0) slideIdx = slides.length - 1;
                else slideIdx--;
                if (taglineIdx <= 0) taglineIdx = taglines.length - 1;
                else taglineIdx--;
            } else {
                console.log("RIGHT");
                if (slideIdx >= slides.length - 1) slideIdx = 0;
                else slideIdx++;
                if (taglineIdx >= taglines.length - 1) taglineIdx = 0;
                else taglineIdx++;
            }
            slide.setAttribute("src", slides[slideIdx]);
            tagline.innerHTML = taglines[taglineIdx];
        });
    });

    document.querySelectorAll(".dot").forEach(function (elt) {});
}

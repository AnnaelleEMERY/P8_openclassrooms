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
            } else {
                console.log("RIGHT");
                if (slideIdx >= slides.length - 1) slideIdx = 0;
                else slideIdx++;
            }
            slide.setAttribute("src", slides[slideIdx]);
            tagline.innerHTML = taglines[slideIdx];

            document
                .querySelectorAll(".dot_selected")
                .forEach((elt) => elt.classList.remove("dot_selected"));
            document
                .querySelectorAll(".dot")
                [slideIdx].classList.add("dot_selected");
        });
    });

    document.querySelectorAll(".dot").forEach(function (elt, index) {
        console.log("init" + index);
        elt.addEventListener("click", function (event) {
            console.log("clic" + event.target.dataset.index);
            slide.setAttribute("src", slides[event.target.dataset.index - 1]);
            tagline.innerHTML = taglines[event.target.dataset.index - 1];

            document
                .querySelectorAll(".dot_selected")
                .forEach((elt) => elt.classList.remove("dot_selected"));
            event.target.classList.add("dot_selected");
        });
    });
}

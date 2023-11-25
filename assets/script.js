const slides = [
    {
        image: "slide1.jpg",
        tagLine:
            "Impressions tous formats <span>en boutique et en ligne</span>",
    },
    {
        image: "slide2.jpg",
        tagLine:
            "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
    },
    {
        image: "slide3.jpg",
        tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
    },
    {
        image: "slide4.png",
        tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
    },
];

var slideIdx = 0;

function initslider() {
    document.querySelectorAll(".cat").forEach(function (elt) {
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
        });
    });
}

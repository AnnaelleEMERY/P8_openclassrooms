slides = [
    "https://i.ytimg.com/vi/lq9tvSSNMpA/maxresdefault.jpg",
    "https://qtxasset.com/quartz/qcloud5/media/image/FierceHealthcare-1502742575/Montana.jpg?VersionId=CWiW7kbIHGIUndlx4BNFK7L_I7KLY5uC",
    "https://photographylife.com/wp-content/uploads/2017/01/Best-of-2016-Nasim-Mansurov-25.jpg",
];

var slideIdx = 0;

function initslider() {
    document.querySelectorAll(".cat").forEach(function (elt) {
        elt.addEventListener("click", function (event) {
            if (event.target.classList.contains("arrow-left")) {
                console.log("Meow !! LEFT");
                if (slideIdx <= 0) slideIdx = slides.length - 1;
                else slideIdx--;
            } else {
                console.log("Meow !! RIGHT");
                if (slideIdx >= slides.length - 1) slideIdx = 0;
                else slideIdx++;
            }
            slide.setAttribute("src", slides[slideIdx]);
        });
    });
}

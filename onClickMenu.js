function onClickMenu(){
    document.getElementById('menu-bar').classList.toggle('change');
    document.getElementById('nav').classList.toggle('change-btn');
}
function plusSlides(n) {
    var slides = document.getElementsByClassName("mySlides");
    var currentSlide = slides[slides.length - 1];
    var nextSlide = currentSlide;
    if (n > 0) {
    nextSlide = currentSlide.nextElementSibling;
    } else if (n < 0) {
    nextSlide = currentSlide.previousElementSibling;
    }
    if (nextSlide) {
    nextSlide.style.display = "block";
    currentSlide.style.display = "none";
    }
}
function currentSlide(n) {
    var slides = document.getElementsByClassName("mySlides");
    var currentSlide = slides[slides.length - 1];
    var nextSlide = currentSlide;
    if (n > 0) {
    nextSlide = currentSlide.nextElementSibling;
    } else if (n < 0) {
    nextSlide = currentSlide.previousElementSibling;
    }
    if (nextSlide) {
    nextSlide.style.display = "block";
    currentSlide.style.display = "none";
    }
}

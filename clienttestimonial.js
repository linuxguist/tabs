var modal = document.getElementById("myModal"); function ShowTestimonialModel(e) { document.getElementById("myIframe").src = e; var t = document.getElementById("myModal"); document.getElementById("myBtn"), document.getElementsByClassName("close")[0]; t.style.display = "block" } function hideTestimonialModel() { var e = document.getElementById("myModal"); document.getElementById("myIframe").src = "", e.style.display = "none" } window.onclick = function (e) { e.target == modal && (modal.style.display = "none") };

var slideIndex = 1;
var slideIndexforauto = 0;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

}


let slideIndex1 = 0;
showSlides1();

function showSlides1() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex1++;
    if (slideIndex1 > slides.length) { slideIndex1 = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1 - 1].style.display = "block";
    dots[slideIndex1 - 1].className += " active";
    setTimeout(showSlides1, 30000); // Change image every 2 seconds
}
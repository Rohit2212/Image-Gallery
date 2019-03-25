//window.onload = 
function openmodal(){

    document.getElementById('myModal').style.display = "block";
    
};
function closeModal() {
    
    document.getElementById('myModal').style.display = "none";
}
var slideIndex = 1;
function slideShow(n) {
    var i;
    var slides = document.getElementsByClassName("showSlides");
    if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  } 
   slides[slideIndex-1].style.display = "block"; 
}
slideShow(slideIndex);
function plusSlides(n) {
  slideShow(slideIndex += n);
}
function currentSlide(n) {
  slideShow(slideIndex = n);
}

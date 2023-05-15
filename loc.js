let slideIndex = 1;
showSlides2(slideIndex);

function plusSlides(n) {
  showSlides2(slideIndex += n);
}

function currentMap(n) {
  showSlides2(slideIndex = n);
}

function showSlides2(n) {
  let i;
  let slides = document.getElementsByClassName("map-left");
  let locs = document.getElementsByClassName("loc");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < locs.length; i++) {
    locs[i].className = locs[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  locs[slideIndex-1].className += " active";
}

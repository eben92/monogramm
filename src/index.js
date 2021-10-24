// mobile navigation bar toggle
const navLinks = document.querySelector("ul");
const openNav = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".fa-times");

openNav.addEventListener("click", () => {
  navLinks.classList.add("show-sidebar");
  openNav.classList.add("hide-btn");
  closeBtn.classList.add("close-btn");
});

closeBtn.addEventListener("click", () => {
  navLinks.classList.remove("show-sidebar");
  closeBtn.classList.remove("close-btn");
  openNav.classList.remove("hide-btn");
});

// end of mobile nav bar toggle

// hero slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}

// end of hero slideshow

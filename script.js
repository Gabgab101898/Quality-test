const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.slider-dots');
let currentIndex = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[index].classList.add('active');

  const slideWidth = slides[0].offsetWidth;
  const translateX = -1 * slideWidth * index;

  slider.style.transform = `translateX(${translateX}px)`;

  // Update active dot
  const dots = dotsContainer.querySelectorAll('.dot');
  dots.forEach((dot) => {
    dot.classList.remove('active');
  });
  dots[index].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 2000);

// Create dots dynamically based on the number of slides
slides.forEach(() => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dotsContainer.appendChild(dot);
});

const dots = dotsContainer.querySelectorAll('.dot');
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
    currentIndex = index;
  });
});

showSlide(currentIndex);


//search bar
const searchIcon = document.querySelector('.search-icon');
const searchBar = document.querySelector('.search-bar');

searchIcon.addEventListener('click', function() {
  searchBar.focus();
});


//cart
window.addEventListener('DOMContentLoaded', function() {
    var cartIcon = document.getElementById('cart-icon');
    cartIcon.addEventListener('click', function() {
      window.location.href = 'cart.html'; 
    });
  });
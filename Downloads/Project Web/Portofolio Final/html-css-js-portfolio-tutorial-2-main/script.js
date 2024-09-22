// Toggle Menu Function
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Inisialisasi Owl Carousel untuk slider berita
$(document).ready(function() {
  $('.news-carousel').owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      dots: false,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1
          },
          576: {
              items: 2
          },
          768: {
              items: 3
          },
          992: {
              items: 4
          }
      }
  });
});

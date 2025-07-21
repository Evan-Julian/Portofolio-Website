// Smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        100,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });

  // Inisialisasi Isotope untuk filtering portofolio
  var $portfolioGrid = $(".portfolio-container").isotope({
    itemSelector: ".portfolio-item",
    layoutMode: "fitRows",
    transitionDuration: "0.6s",
  });

  $(".filter-btn").on("click", function () {
    $(".filter-btn").removeClass("active");
    $(this).addClass("active");

    var filterValue = $(this).attr("data-filter");
    $portfolioGrid.isotope({
      filter: filterValue,
    });
  });

  // ===============================================
  // === Inisialisasi Swiper untuk Tools Section ===
  // ===============================================
  const toolsSwiper = new Swiper(".tools-swiper", {
    loop: true,
    slidesPerView: "auto", // auto supaya responsif & fluid
    spaceBetween: 30,
    speed: 3000, // biar geraknya smooth bangettt~
    autoplay: {
      delay: 0, // delay 0 supaya gerak terus tanpa jeda
      disableOnInteraction: false,
    },
    allowTouchMove: false,
    pagination: false,
    navigation: false,
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  });
}); // End of $(document).ready()

// INTERSECTION OBSERVER Counter Animation 🚀
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let started = false;

  const startCounting = () => {
    counters.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute("data-target");
        const current = +counter.innerText;
        const increment = target / 200;

        if (current < target) {
          counter.innerText = Math.ceil(current + increment);
          setTimeout(updateCount, 10);
        } else {
          counter.innerText = target + "+";
        }
      };

      updateCount();
    });
  };

  const counterSection = document.querySelector(".section.bg-dark");

  const observer = new IntersectionObserver(
    function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          startCounting();
          started = true;
          observer.unobserve(counterSection);
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  if (counterSection) {
    observer.observe(counterSection);
  }
});

// Progress Scroll Bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});

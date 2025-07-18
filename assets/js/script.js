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
              100, // Durasi scroll
              function () {
                  window.location.hash = hash;
              }
          );
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const items = document.querySelectorAll(".portfolio-item");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            // Active class
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const filterValue = btn.getAttribute("data-filter").replace(".", "");

            items.forEach(item => {
                if (filterValue === "*" || item.classList.contains(filterValue)) {
                    item.classList.remove("hide");
                } else {
                    item.classList.add("hide");
                }
            });
        });
    });
});

// INTERSECTION OBSERVER Counter Animation 🚀
document.addEventListener("DOMContentLoaded", function () {
    const counters = document.querySelectorAll('.counter');
    let started = false;

    const startCounting = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
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

    const counterSection = document.querySelector('.section.bg-dark'); // ganti sesuai kelas parent statistik

    const observer = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !started) {
                startCounting();
                started = true;
                observer.unobserve(counterSection); // biar cuma sekali
            }
        });
    }, { threshold: 0.5 }); // 50% terlihat

    if (counterSection) {
        observer.observe(counterSection);
    }
});

//  Progress Scroll Bar
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";
});


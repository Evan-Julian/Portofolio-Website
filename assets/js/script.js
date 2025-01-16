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
              700,
              function () {
                  window.location.hash = hash;
              }
          );
      }
  });
});

// Portfolio filters
$(window).on("load", function () {
  var t = $(".portfolio-container");

  // Initialize Isotope with default "All" filter
  t.isotope({
      filter: "*", // Default to show all items
      animationOptions: {
          duration: 750,
          easing: "linear",
          queue: !1,
      },
  });

  // Filter functionality on click
  $(".filters a").click(function () {
      $(".filters .active").removeClass("active");
      $(this).addClass("active");
      var i = $(this).attr("data-filter");
      t.isotope({
          filter: i,
          animationOptions: {
              duration: 750,
              easing: "linear",
              queue: !1,
          },
      });
      return !1;
  });
});

const mobileMenu = $(".navbar-lateral");

$(".mobile-menu-button").on("click", () => {
  if (mobileMenu.css("display") === "none") {
    mobileMenu.fadeIn(300);
  } else {
    mobileMenu.fadeOut(300);
  }
});

$(".saly-link").on("click", () => mobileMenu.css("display", "none"));

$(".dropdown-menu-button").on("click", function () {
  const dropMenu = $(this).next("ul");
  dropMenu.slideToggle("slow");
});

$(() => $('[data-toggle="tooltip"]').tooltip());

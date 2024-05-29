const mobileMenu = $(".navbar-lateral");

const closeMobileMenu = () => {
  if (mobileMenu.css("display") === "none") {
    mobileMenu.fadeIn(300);
  } else {
    mobileMenu.fadeOut(300);
  }
};

$(".mobile-menu-button").on("click", closeMobileMenu);

$(".saly-link").on("click", closeMobileMenu);

$(".dropdown-menu-button").on("click", function () {
  const dropMenu = $(this).next("ul");
  dropMenu.slideToggle("slow");
});

$(() => $('[data-toggle="tooltip"]').tooltip());

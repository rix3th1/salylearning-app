$(".mobile-menu-button").on("click", function () {
  var mobileMenu = $(".navbar-lateral");
  if (mobileMenu.css("display") == "none") {
    mobileMenu.fadeIn(300);
  } else {
    mobileMenu.fadeOut(300);
  }
});

$(".dropdown-menu-button").on("click", function () {
  var dropMenu = $(this).next("ul");
  dropMenu.slideToggle("slow");
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

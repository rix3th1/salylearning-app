$(document).ready(function () {
  $(".tooltips-general").tooltip("hide");
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

  $(".btn-help").on("click", function () {
    $("#ModalHelp").modal({
      show: true,
      backdrop: "static",
    });
  });
});
(function ($) {
  $(window).load(function () {
    $(".custom-scroll-containers").mCustomScrollbar({
      theme: "dark-thin",
      scrollbarPosition: "inside",
      autoHideScrollbar: true,
      scrollButtons: { enable: true },
    });
  });
})(jQuery);

///modal de avatar
$(document).ready(function () {
  // Inicializar los tooltips
  $('[data-toggle="tooltip"]').tooltip();

  // Cambiar el color al pasar el mouse
  $(".avatar-option").hover(
    function () {
      $(this).addClass("active-avatar");
    },
    function () {
      $(this).removeClass("active-avatar");
    }
  );
});
//subir avatar
$(document).ready(function () {
  $(".avatar-option").click(function () {
    var imgSrc = $(this).find("img").attr("src");
    // Actualiza la imagen principal
    $("#avatar").attr("src", imgSrc);
    // Habilita el botón de guardar
    $("#guardarBtn").prop("disabled", false);
  });

  $("#guardarBtn").click(function () {
    console.log("Imagen guardada:", $("#avatar").attr("src"));
    $("#avatarModal").modal("hide");
  });
});
//subir avatar desde archivos

$(document).ready(function () {
  $("#uploadImage").change(function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        $("#avatar").attr("src", e.target.result);
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
});

$(document).ready(function(){
    $('.tooltips-general').tooltip('hide');
    $('.mobile-menu-button').on('click', function(){
        var mobileMenu=$('.navbar-lateral');	
        if(mobileMenu.css('display')=='none'){
            mobileMenu.fadeIn(300);
        }else{
            mobileMenu.fadeOut(300);
        }
    });
    $('.dropdown-menu-button').on('click', function(){
        var dropMenu=$(this).next('ul');
        dropMenu.slideToggle('slow');
    });
    $('.exit-system-button').on('click', function(e){
        e.preventDefault();
        var LinkExitSystem=$(this).attr("data-href");
        swal({
            title: "¿Estás seguro?",
            text: "Quieres salir del sistema y cerrar la sesión actual",
            type: "warning",
            showCancelButton: true,
            confirmButtonColor: "#5cb85c",
            confirmButtonText: "Si, salir",
            cancelButtonText: "No, cancelar",
            animation: "slide-from-top",
            closeOnConfirm: false 
        },function(){
            window.location=LinkExitSystem; 
        });  
    });
    $('.search-book-button').click(function(e){
        e.preventDefault();
        var LinkSearchBook=$(this).attr("data-href");
        swal({
           title: "¿Qué libro estás buscando?",
           text: "Por favor escribe el nombre del libro",
           type: "input",   
           showCancelButton: true,
           closeOnConfirm: false,
           animation: "slide-from-top",
           cancelButtonText: "Cancelar",
           confirmButtonText: "Buscar",
           confirmButtonColor: "#3598D9",
           inputPlaceholder: "Escribe aquí el nombre de libro" }, 
      function(inputValue){
           if (inputValue === false) return false;  

           if (inputValue === "") {
               swal.showInputError("Debes escribir el nombre del libro");     
               return false;   
           } 
            window.location=LinkSearchBook+"?bookName="+inputValue;
       });
    });
    $('.btn-help').on('click', function(){
        $('#ModalHelp').modal({
            show: true,
            backdrop: "static"
        });
    });
});
(function($){
    $(window).load(function(){
        $(".custom-scroll-containers").mCustomScrollbar({
            theme:"dark-thin",
            scrollbarPosition: "inside",
            autoHideScrollbar: true,
            scrollButtons:{ enable: true }
        });
    });
})(jQuery);
//FUNCION OJO DE PESCADO
function mostrarOcultarContrasena(inputId, eyeIconId) {
    var inputElement = document.getElementById(inputId);
    var eyeIcon = document.getElementById(eyeIconId);

    if (inputElement.type === 'password') {
      inputElement.type = 'text';
      eyeIcon.classList.remove('zmdi-eye');
      eyeIcon.classList.add('zmdi-eye-off');
    } else {
      inputElement.type = 'password';
      eyeIcon.classList.remove('zmdi-eye-off');
      eyeIcon.classList.add('zmdi-eye');
    }
  }

  function mostrarNuevaContrasena(inputId, eyeIconId) {
    var inputElement = document.getElementById(inputId);
    var eyeIcon = document.getElementById(eyeIconId);

    if (inputElement.type === 'password') {
      inputElement.type = 'text';
      eyeIcon.classList.remove('zmdi-eye');
      eyeIcon.classList.add('zmdi-eye-off');
    } else {
      inputElement.type = 'password';
      eyeIcon.classList.remove('zmdi-eye-off');
      eyeIcon.classList.add('zmdi-eye');
    }
  }
  function mostrarConfiContrasena(inputId, eyeIconId) {
    var inputElement = document.getElementById(inputId);
    var eyeIcon = document.getElementById(eyeIconId);

    if (inputElement.type === 'password') {
      inputElement.type = 'text';
      eyeIcon.classList.remove('zmdi-eye');
      eyeIcon.classList.add('zmdi-eye-off');
    } else {
      inputElement.type = 'password';
      eyeIcon.classList.remove('zmdi-eye-off');
      eyeIcon.classList.add('zmdi-eye');
    }
  }
  ///modal de avatar 
  $(document).ready(function () {
        // Inicializar los tooltips
        $('[data-toggle="tooltip"]').tooltip();
        
        // Cambiar el color al pasar el mouse
        $('.avatar-option').hover(
            function () {
                $(this).addClass('active-avatar');
            },
            function () {
                $(this).removeClass('active-avatar');
            }
        );
    });
//subir avatar
    $(document).ready(function() {
    $('.avatar-option').click(function() {
    var imgSrc = $(this).find('img').attr('src');
    // Actualiza la imagen principal
    $('#avatar').attr('src', imgSrc);
    // Habilita el botón de guardar
    $('#guardarBtn').prop('disabled', false);
    });

    $('#guardarBtn').click(function() {
    console.log('Imagen guardada:', $('#avatar').attr('src'));
    $('#avatarModal').modal('hide');
    });
    });
//subir avatar desde archivos 
    
    $(document).ready(function() {
    $('#uploadImage').change(function() {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $('#avatar').attr('src', e.target.result);
      }
      reader.readAsDataURL(this.files[0]);
    }
    });
    });
  
  
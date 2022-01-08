$(function () {
  //Crea un navbar de transparente a color 
  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      $('#navHome').addClass("fondo-nav");
    } else {
      $('#navHome').removeClass("fondo-nav");
    }
  });
  //crean un tooltip en los iconos de redes sociales
  $('[data-toggle="tooltip"]').tooltip()
});



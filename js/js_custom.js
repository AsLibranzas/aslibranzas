/* Agregar active al dar click en el menu del header */
$("#menu li a").on('click', function (e) {
  $("#menu .active").removeClass('active');
  $(this).addClass('active');
});
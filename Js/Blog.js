$(document).ready(function() {
    //Redireccionar botones
    $(".Inicio").click(function() {
        window.location.href = "Inicio.html";
    });

        
  var Estado;
  $('#Sol').hide();
  var Colo = localStorage.getItem('Color');
  if(Colo==="Oscuro"){
   ModoOscuro();
 }
 else{
   ModoLuz();
 }

    $('#Luna').click(ModoOscuro);
    function ModoOscuro() {
      Estado = "Oscuro";
      localStorage.setItem('Color', Estado);
      $('body').css("background-color", "#3e423d");
      //Header
      $('#Luna').hide();
      $('#Sol').show();
      $(".ImagenTitulo").css("background-color", "black");
      $(".Top").css("background-color", "black");
      $(".Top a").addClass("Oscuro");
      $(".iconos").addClass("Oscuroo");
      //Body
      $("main").css("background-color", "black");
      $("article").css("background-color", "black");
      $("article").css("color", "white");
      //Footer

    }
    $('#Sol').click(ModoLuz);
    function ModoLuz() {
      Estado = "Luz";
      localStorage.setItem('Color', Estado);
      $('body').css("background-color", "#7DA66A");
      //Header
      $('#Luna').show();
      $('#Sol').hide();
      $(".ImagenTitulo").css("background-color", "white");
      $(".Top a").css("color", "black");
      $(".Top").css("background-color", "white");
      $(".Top a").removeClass("Oscuro");
      $(".Top a").css("color", "#7DA66A");
      $(".iconos").removeClass("Oscuroo");
      //Body
      $("main").css("background-color", "#ececec");
      $("article").css("background-color", "white");
      $("article").css("color", "black");
      //Footer

    }

});
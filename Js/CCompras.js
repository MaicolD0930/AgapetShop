$(document).ready(function() {
      //Validar si esta registrado
      var registrado = localStorage.getItem('Registrado');
      if(registrado==="Si"){
        $('#MiPerfil').click(Perfil);
        function Perfil() {
          window.location.href = "perfil.html";
        }
      }else{
        $("#MiPerfil").toggle();
      }
      
      $('#Sesion').click(MostrarSesion);
      function MostrarSesion() {
        if(registrado==="Si"){
          $(".Sesion").toggle();
          var NombreG = localStorage.getItem('NombreG');
          $("#CargarNombre").html(NombreG);
        }else{
          $(".Close").toggle();
        }
      }
      $('#CerrarS').click(CerrarSesion);
      //Cerrar Sesion
      function CerrarSesion() {
        registrado = "No";
        localStorage.setItem('Registrado', registrado);
        $(".Sesion").toggle();
      }
      $("#CrearC").click(function() {
        window.location.href = "reserva.html";
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
      //Footer

    }
    //Redireccionar botones
        $("#Fav").click(function() {
            window.location.href = "ProductoFavorito.html";
        });
        $("#Carro").click(function() {
          window.location.href = "carrito.html";
      });

});

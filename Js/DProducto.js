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
    var DProducto = localStorage.getItem('DetalleProducto');
    $('#CargarContenido').html(DProducto);
        //Redireccionar botones
        $("#Fav").click(function() {
            window.location.href = "ProductoFavorito.html";
        });
        var NombreP = $("#h8");
        var ContenidoNombre = NombreP.text();
        $('#NombreProducto').text(ContenidoNombre);
        
    //Funcionamiento Carrito
  let SlideActual = 0;
  function SlideSeleccionado(index) {
    const slides = document.querySelector('.slides1');
    const slideWidth = document.querySelector('.slide1').clientWidth;
    SlideActual = index;
    slides.style.transform = `translateX(${-slideWidth * index}px)`;
  }
  function SiguienteSlide() {
    SlideActual = (SlideActual + 1) % 4;
    SlideSeleccionado(SlideActual);
  }
  function AnteriorSlide() {
    SlideActual = (SlideActual - 1 + 4) % 4;
    SlideSeleccionado(SlideActual);
  }

  //Mostrar Siguiente
  $('#Next').click(Siguiente);
  function Siguiente() {
    SiguienteSlide();
  }
   //Mostrar Anterior
   $('#Anterior').click(Anterior);
   function Anterior() {
    AnteriorSlide();
   }



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
    $(".OP2").css("background-color", "black");
    $(".OP2").css("border", "1px solid white");
    $(".OP2 h6").css("color", "white");
    $(".OP2 p").css("color", "white");
    $(".Filtro select").css("background-color", "black");
    $(".Filtro select").css("color", "white");
    $("#Next i").css("color", "white");
    $("#Anterior i").css("color", "white");
    //Footer
    $("footer").css("background-color", "black");
    $("footer input").css("border", "1px solid white");
    $("footer input").css("background-color", "black");
    $("footer input").css("color", "white");
    $("footer span").css("color", "white");
    $("footer span").css("border", "1px solid white");
    $("footer span").css("background-color", "black");
    $(".sc").css("border-left", "1px solid white");
    $(".sc").css("border-right", "1px solid white");
    

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
    $(".OP2").css("background-color", "white");
    $(".OP2").css("border", "1px solid black");
    $(".OP2 h6").css("color", "black");
    $(".OP2 p").css("color", "black ");
    $(".Filtro select").css("background-color", "white");
    $(".Filtro select").css("color", "black");
    $("#Next i").css("color", "#7DA66A");
    $("#Anterior i").css("color", "#7DA66A");
    
    //Footer
    $("footer").css("background-color", "white");
    $("footer input").css("border", "1px solid black");
    $("footer input").css("background-color", "white");
    $("footer input").css("color", "black");
    $("footer span").css("color", "black");
    $("footer span").css("border", "1px solid black");
    $("footer span").css("background-color", "white");
    $(".sc").css("border-left", "1px solid black");
    $(".sc").css("border-right", "1px solid black");
  }
  

   // Almacenamiento LocalStorage
  function ProductoFavorito() {
    if(localStorage.getItem('DivGuardado') === null){
        SlideSeleccionado(0);
        $('.P1').show();
        $('.P2').hide();
        $('.P3').hide();
        $('.P4').hide();
        $('.Fav1').show();
        $('.Oj').show();
        $('.Fav1').removeClass("Oculto");
        var boton = $(this);
        var divPadre = boton.closest('div');
        var ProducotDiv = divPadre.html();
        localStorage.setItem('DivGuardado', ProducotDiv);
        alert('¡Se agrego el producto a favoritos! Cantidad Favoritos: 1');
        $('.Fav1').addClass("Oculto");
        $('.P2').show();
        $('.P3').show();
        $('.P4').show();
        $('.Fav1').hide();
        $('.Oj').hide();
    }else{
        if(localStorage.getItem('DivGuardado1') === null){
            SlideSeleccionado(0);
            $('.P1').show();
            $('.P2').hide();
            $('.P3').hide();
            $('.P4').hide();
            $('.Fav1').show();
            $('.Oj').show();
            $('.Oculto').removeClass("Fav1");
            var boton = $(this);
            var divPadre = boton.closest('div');
            var ProducotDiv1 = divPadre.html();
            localStorage.setItem('DivGuardado1', ProducotDiv1);
            alert('¡Se agrego el producto a favoritos! Cantida Favoritos: 2');
            $('.Oculto').addClass("Fav1");
            $('.P2').show();
            $('.P3').show();
            $('.P4').show();
            $('.Fav1').hide();
            $('.Oj').hide();

        }else{
            alert("!! Solo puede tener dos productos en favorito !!")
        }   
    }
  }
  $('.Fav').click(ProductoFavorito);
});
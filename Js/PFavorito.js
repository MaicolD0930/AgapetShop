$(document).ready(function() {
  var Estado;
  $('#Sol').hide();
    $('#PrimeroIzquierda').toggleClass("col-md-4", true);
    //Cargar LocalStorage
    if(localStorage.getItem('DivGuardado') != null){
        $(".Nulo").hide();
        var Div = localStorage.getItem('DivGuardado');
        $('#CargarContenido').html(Div);
    }
    if(localStorage.getItem('DivGuardado') === null){
        $(".Nulo").show();
        $('#CargarContenido').hide();
    }
    if(localStorage.getItem('DivGuardado1') != null){
        var Li =$('<div class="OP2 row col-md-12 " id="CargarContenido1">');
        $(".titu3").append(Li);
        var Div1 = localStorage.getItem('DivGuardado1');
        $('#CargarContenido1').html(Div1);
        $(".Nulo").hide();
        $("#CargarContenido").css("margin-bottom","-20px");
    }
    if(localStorage.getItem('DivGuardado1') === null){
        $('#CargarContenido1').hide();
    }
    if(localStorage.getItem('DivGuardado') === null && localStorage.getItem('DivGuardado1') === null){
        $(".Nulo").show();
        $(".Nulo1").hide();
    }

    //Eliminar Campos
    $(".Comentarios").on("click", "#Eliminar", function() {
        $(this).closest("li").remove();
        $('#Cm3').hide();
        $('#Cm2').show();
    });
    $(".Fav1").click(function() {
        localStorage.setItem('DivGuardado', null)
        localStorage.removeItem('DivGuardado')
        alert("Producto N.1 Eliminado de Favoritos")
        window.location.href = "ProductoFavorito.html";
    });
    $(".Oculto").click(function() {
        localStorage.setItem('DivGuardado1', null);
        localStorage.removeItem('DivGuardado1')
        alert("Producto N.2 Eliminado de Favoritos")
        window.location.href = "ProductoFavorito.html";
    });
    $("#DeleteAll").click(function() {
        localStorage.setItem('DivGuardado', null)
        localStorage.removeItem('DivGuardado')
        localStorage.setItem('DivGuardado1', null);
        localStorage.removeItem('DivGuardado1')
        alert("Se Eliminaron Todos Los Productos de Favoritos")
        window.location.href = "ProductoFavorito.html";
    });



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
    $(".titu3").css("background-color", "black");
    $(".Nulo h4").css("color", "white");
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
    $(".titu3").css("background-color", "white");
    $(".Nulo h4").css("color", "black");
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
    

    //Redirigir
    $("#AFav").click(function() {
        window.location.href = "CarritoCompras.html";
        $(".Nulo1").hide();
    });
    
      /* Detalle del Producto */
  function DetalleProducto() {
    $('.P2').css("display", "block");
    $('.P3').css("display", "block");
    $('.P4').css("display", "block");
    $('.PrimeroIzquierda').toggleClass("col-md-4", true);
    $('.PrimeroDerecha').toggleClass("col-md-8", true);
    $('.Fav1').hide();
    $('.Oj').hide();
    var Btn = $(this);
    var PDiv = Btn.closest('div');
    var PDetalle = PDiv.html();
    localStorage.setItem('DetalleProducto', PDetalle);
    window.location.href = "DetalleProducto.html";
    $('.Fav1').addClass("Oculto");
    $('.PrimeroIzquierda').toggleClass("col-md-4", false);
    $('.PrimeroDerecha').toggleClass("col-md-8", false);
  }
$('.Oj').click(DetalleProducto);

});
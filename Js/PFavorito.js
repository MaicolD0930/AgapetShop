$(document).ready(function() {
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
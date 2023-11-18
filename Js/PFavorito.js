$(document).ready(function() {
    //Cargar LocalStorage
    var Div = localStorage.getItem('DivGuardado');
    $('#CargarContenido').html(Div);
    //Eliminar Campos
    $("#Eli").click(function() {
        localStorage.removeItem('DivGuardado');
        window.location.href = "ProductoFavorito.html";
    });
    //Comprobar si El LocalStorage esta vacio 
    if(localStorage.getItem('DivGuardado')===null){
        $("#Eli").hide();
        $(".Nulo").show();
    }
    else{
        $(".Nulo").hide();
        $("#Eli").show();
    }
    //Redirigir
    $("#AFav").click(function() {
        window.location.href = "CarritoCompras.html";
    });
    

});
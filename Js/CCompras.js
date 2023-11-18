$(document).ready(function() {
    $('#Cm3').hide();
        //Redireccionar botones
        $("#Fav").click(function() {
            window.location.href = "ProductoFavorito.html";
        });

        $("#BtnAgregar").click(function() {
            var Correo = $("#Correo").val();
            var Nombre = $("#Nombre").val();
            var Mensaje = $("#Msg").val();
    
            if (Correo && Nombre && Mensaje) {
                $('#Cm2').hide();
                $('#Cm3').show();
                
                var Li =$("<li>");
                var Com =Li.append($('<div class="Cm3">'));
                Com.append($("<h6>").text("Tu Comentario: " +Nombre).val(Nombre));
                Com.append($("<p>").text(Mensaje).val(Mensaje));
                Com.append($('<button class="btn btn-danger" id="Eliminar">Eliminar comentario</button>').
                css("text-align", "center").val("Boton"));
        
                $(".Comentarios ul .cc3").append(Com);
    
                $("#Correo").val("");
                $("#Nombre").val("");
                $("#Msg").val("");
    
            } else {
                alert("Por favor, complete todos los campos.");
            }
        });
        $(".Comentarios").on("click", "#Eliminar", function() {
            $(this).closest("li").remove();
            $('#Cm3').hide();
            $('#Cm2').show();
        });
});

  function botonClicado() {
    var boton = $(this);
    var divPadre = boton.closest('div');

    var ProducotDiv = divPadre.html()
    localStorage.setItem('DivGuardado', ProducotDiv);
    alert('¡Se agrego el producto a favoritos!');
  }

  $('.Fav').click(botonClicado);
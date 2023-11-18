$(document).ready(function() {
        $('.PrimeroIzquierda').toggleClass("col-md-4", false);
        $('.PrimeroDerecha').toggleClass("col-md-8", false);

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
    if(localStorage.getItem('DivGuardado') === null){
        $('.PrimeroIzquierda').toggleClass("col-md-4", true);
        $('.PrimeroDerecha').toggleClass("col-md-8", true);
        $('.Fav1').removeClass("Oculto");
        var boton = $(this);
        var divPadre = boton.closest('div');
        var ProducotDiv = divPadre.html();
        localStorage.setItem('DivGuardado', ProducotDiv);
        alert('¡Se agrego el producto a favoritos! Cantidad Favoritos: 1');
        $('.Fav1').addClass("Oculto");
        $('#PrimeroIzquierda').toggleClass("col-md-4", false);
        $('#PrimeroDerecha').toggleClass("col-md-8", false);
    }else{
        if(localStorage.getItem('DivGuardado1') === null){
            $('.PrimeroIzquierda').toggleClass("col-md-4", true);
            $('.PrimeroDerecha').toggleClass("col-md-8", true);
            $('.Oculto').removeClass("Fav1");
            var boton = $(this);
            var divPadre = boton.closest('div');
            var ProducotDiv1 = divPadre.html();
            localStorage.setItem('DivGuardado1', ProducotDiv1);
            alert('¡Se agrego el producto a favoritos! Cantida Favoritos: 2');
            $('.Oculto').addClass("Fav1");
            $('.PrimeroIzquierda').toggleClass("col-md-4", false);
            $('.PrimeroDerecha').toggleClass("col-md-8", false);
        }else{
            alert("!! Solo puede tener dos productos en favorito !!")
        }   
    }
  }
  $('.Fav').click(botonClicado);
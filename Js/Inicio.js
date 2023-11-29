$(document).ready(function() {
    //Redireccionar botones
    $("#Fav").click(function() {
        window.location.href = "ProductoFavorito.html";
    });

        //Agregar Comentario
        $("#BtnAgregar").click(function() {
            var Correo = $("#Correo").val();
            var Nombre = $("#Nombre").val();
            var Mensaje = $("#Msg").val();
    
            if (Correo && Nombre && Mensaje) {
                $('#Cm2').hide();
                $('#Cm3').show();
                
                var Com =$('<div id="Cm3">');
                Com.append($("<h6>").text("Tu Comentario: " +Nombre).val(Nombre));
                Com.append($("<p>").text(Mensaje).val(Mensaje));
                Com.append($('<button class="btn btn-danger" id="Eliminar">Eliminar comentario</button>').
                css("text-align", "center").val("Boton"));
        
                $(".slides #Cm1").append(Com);
    
                $("#Correo").val("");
                $("#Nombre").val("");
                $("#Msg").val("");
    
            } else {
                alert("Por favor, complete todos los campos.");
            }
        });
        $(".slides").on("click", "#Eliminar", function() {
            $(this).closest("#Cm3").remove();
            $('#Cm2').show();
        });
});


//Funcionamiento Carrito
let currentSlide = 0;
function MostrarSeleccionado(index) {
  const slides = document.querySelector('.slides');
  const slideWidth = document.querySelector('.slide').clientWidth;
  currentSlide = index;
  slides.style.transform = `translateX(${-slideWidth * index}px)`;
}
function nextSlide() {
  currentSlide = (currentSlide + 1) % 4;
  MostrarSeleccionado(currentSlide);
}
setInterval(nextSlide, 5000);
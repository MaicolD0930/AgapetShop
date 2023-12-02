$(document).ready(function() {
    $('#Sol').hide();
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


        var Colo = localStorage.getItem('Color');
        if(Colo==="Oscuro"){
         ModoOscuro();
       }
       else{
         ModoLuz();
       }

       $('#Luna').click(ModoOscuro);
       function ModoOscuro() {
            var Estado = "Oscuro";
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
            $(".Comentarios-container").css("background-color", "black");
            $(".Comentarios-container h6").css("color", "white");
            $(".Comentarios-container p").css("color", "white");
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
            var Estado = "Luz";
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
            $(".Comentarios-container").css("background-color", "white");
            $(".Comentarios-container h6").css("color", "black");
            $(".Comentarios-container p").css("color", "black");
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
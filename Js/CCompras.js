$(document).ready(function() {
  var Estado;
  $('#Sol').hide();
  var Colo = localStorage.getItem('Color');
  if(Colo==="Oscuro"){
   ModoOscuro();
 }
 else{
   ModoLuz();
 }

        $('.P2').css("display", "none");
        $('.P3').css("display", "none");
        $('.P4').css("display", "none");
        $('.PrimeroIzquierda').toggleClass("col-md-4", false);
        $('.PrimeroDerecha').toggleClass("col-md-8", false);

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

    $('#Cm3').hide();
    //Redireccionar botones
        $("#Fav").click(function() {
            window.location.href = "ProductoFavorito.html";
        });

  var select = $("#13");
      select.change(function() {
        var valorSeleccionado = $(this).val();
        if(valorSeleccionado === "Defecto"){
          $('#Comida').show();
          $('#Juguetes').show();
          $('#Accesorios').show();
        }
        else if(valorSeleccionado === "Ali"){
          $('#Comida').show();
          $('#Juguetes').hide();
          $('#Accesorios').hide();
        }
        else if(valorSeleccionado === "Jug"){
          $('#Comida').hide();
          $('#Juguetes').show();
          $('#Accesorios').hide();
        }
        else if(valorSeleccionado === "Acc"){
          $('#Comida').hide();
          $('#Juguetes').hide();
          $('#Accesorios').show();
        }
      });
  select.addEventListener("change", function () {

      if(valorSeleccionado === "Defecto"){
        $('#Comida').show();
        $('#Juguetes').show();
        $('#Comida').show();
      }
      else if(select.value === "Ali"){
        $('#Comida').show();
        $('#Juguetes').hide();
        $('#Comida').hide();
      }
      else if(select.value === "Jug"){
        $('#Comida').hide();
        $('#Juguetes').show();
        $('#Comida').hide();
      }
      else if(select.value === "Acc"){
        $('#Comida').hide();
        $('#Juguetes').hide();
        $('#Comida').show();
      }
  });
});
// Almacenamiento LocalStorage

  function ProductoFavorito() {
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
        $('.PrimeroIzquierda').toggleClass("col-md-4", false);
        $('.PrimeroDerecha').toggleClass("col-md-8", false);
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
  $('.Fav').click(ProductoFavorito);


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
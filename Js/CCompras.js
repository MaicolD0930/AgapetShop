$(document).ready(function() {
        $('.P2').css("display", "none");
        $('.P3').css("display", "none");
        $('.P4').css("display", "none");
        $('.PrimeroIzquierda').toggleClass("col-md-4", false);
        $('.PrimeroDerecha').toggleClass("col-md-8", false);

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
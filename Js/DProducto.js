$(document).ready(function() {
    var DProducto = localStorage.getItem('DetalleProducto');
    $('#CargarContenido').html(DProducto);
        //Redireccionar botones
        $("#Fav").click(function() {
            window.location.href = "ProductoFavorito.html";
        });

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
  

   // Almacenamiento LocalStorage
  function ProductoFavorito() {
    if(localStorage.getItem('DivGuardado') === null){
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
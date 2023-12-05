let productosDetalles = localStorage.getItem("productos-detalles");
productosDetalles = JSON.parse(productosDetalles);

console.log(productosDetalles);

const contenedorDetallesProductos = document.querySelector("#contenedorDetallesProductos");

document.addEventListener('DOMContentLoaded', function () {
    cargarProductosDetalles();
    actualizarBotones();
});

//Se llena el carrito de compras
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
} else {
    productosEnCarrito = [];
}

function cargarProductosDetalles() {
    if (productosDetalles && productosDetalles.length > 0) {

        contenedorDetallesProductos.classList.remove("disabled");


        contenedorDetallesProductos.innerHTML = "";

        productosDetalles.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("detalle-producto");
            div.innerHTML = `
                <img class="detalles-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="detalle-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                    <p>${producto.descripcion}</p>
                </div>
                <div class="detalle-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <button class="boton-comprar" id="${producto.id}">
                    <i class="bi bi-basket-fill"></i>
            `;

            contenedorDetallesProductos.append(div);
        })

        actualizarBotones();
    } else {

        contenedorDetallesProductos.classList.add("disabled");
    }
}

cargarProductosDetalles();
actualizarBotones();

function limpiarProductosDetalles() {
    // Limpiar la descripción y actualizar la interfaz
    productosDetalles = [];
    localStorage.setItem("productos-detalles", JSON.stringify(productosDetalles));
    cargarProductosDetalles();
}

function actualizarBotones() {
    botonesDetalles = document.querySelectorAll(".boton-volver");
    botonesDetalles.forEach(boton => {
        boton.addEventListener("click", limpiarProductosDetalles);
    });
    
    const botonComprar = document.querySelector(".boton-comprar");
    
    // Asigna el evento click solo una vez
    if (botonComprar) {
        botonComprar.addEventListener("click", agregarAlCarritoDesdeDetalles);
    }
}

function agregarAlCarritoDesdeDetalles() {
    const idBoton = document.querySelector(".boton-comprar").id; // Obtén el ID directamente del botón
    const productoAgregado = productosDetalles.find(producto => producto.id === idBoton);

    // Asegúrate de que productosEnCarrito esté inicializado
    if (!productosEnCarrito) {
        productosEnCarrito = [];
    }

    Toastify({
      text: "Producto agregado",
      duration: 3000,
      gravity: "right", // Posición de la notificación (top, bottom, left, right) (opcional)
      position: "right", // Posición dentro de la ubicación (opcional)
      backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Color de fondo (opcional)
    }).showToast();

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}




$(document).ready(function() {
      //Validar si esta registrado
      var registrado = localStorage.getItem('Registrado');
      if(registrado==="Si"){
        $('#MiPerfil').click(Perfil);
        function Perfil() {
          window.location.href = "perfil.html";
        }
      }else{
        $("#MiPerfil").toggle();
      }
      
      $('#Sesion').click(MostrarSesion);
      function MostrarSesion() {
        if(registrado==="Si"){
          $(".Sesion").toggle();
          var NombreG = localStorage.getItem('NombreG');
          $("#CargarNombre").html(NombreG);
        }else{
          $(".Close").toggle();
        }
      }
      $('#CerrarS').click(CerrarSesion);
      //Cerrar Sesion
      function CerrarSesion() {
        registrado = "No";
        localStorage.setItem('Registrado', registrado);
        $(".Sesion").toggle();
      }
      $("#CrearC").click(function() {
        window.location.href = "reserva.html";
    });

    
  var Estado;
  $('#Sol').hide();
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
    $("main").css("background-color", "black");
    //Footer

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
    $("main").css("background-color", "#ececec");
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

      //Redireccionar botones
      $("#Fav").click(function() {
        window.location.href = "ProductoFavorito.html";
    });
    $("#Carro").click(function() {
      window.location.href = "carrito.html";
  });
});
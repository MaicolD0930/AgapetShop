let productosEnCarrito = localStorage.getItem("productos-en-carrito");
productosEnCarrito = JSON.parse(productosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");
const botonComprar = document.querySelector(".carrito-acciones-comprar");


function cargarProductosCarrito() {
    if (productosEnCarrito && productosEnCarrito.length > 0) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;
    
            contenedorCarritoProductos.append(div);
        })
    
    actualizarBotonesEliminar();
    actualizarTotal();
	
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
        contenedorCarritoComprado.classList.add("disabled");
    }

}

cargarProductosCarrito();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito(e) {
  Toastify({
    text: "Producto Eliminado",
    duration: 3000,
    gravity: "right", // Posición de la notificación (top, bottom, left, right) (opcional)
    position: "right", // Posición dentro de la ubicación (opcional)
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)", // Color de fondo (opcional)
  }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));

}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnCarrito.length = 0;
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
            cargarProductosCarrito();
        }
      })
}


function actualizarTotal() {
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc + (producto.precio * producto.cantidad), 0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", comprarCarrito);
function comprarCarrito() {
    var registrado = localStorage.getItem('Registrado');
    if(registrado==="Si"){
      productosEnCarrito.length = 0;
      localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
      
      contenedorCarritoVacio.classList.add("disabled");
      contenedorCarritoProductos.classList.add("disabled");
      contenedorCarritoAcciones.classList.add("disabled");
      contenedorCarritoComprado.classList.remove("disabled");

    }else{
      alert("!!Debe iniciar sesion para realizar una compra!!")
    }
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

  }
  //Redireccionar botones
      $("#Fav").click(function() {
          window.location.href = "ProductoFavorito.html";
      });
      $("#Carro").click(function() {
        window.location.href = "carrito.html";
    });

});

let productosEnFavoritos = localStorage.getItem("productos-en-favoritos");
productosEnFavoritos = JSON.parse(productosEnFavoritos);

console.log(productosEnFavoritos);

const contenedorFavoritosVacio = document.querySelector("#favorito-vacio");
const contenedorFavoritosProductos = document.querySelector("#favoritos-productos");
const contenedorFavoritosAcciones = document.querySelector("#favoritos-acciones");
let botonesEliminar = document.querySelectorAll(".favoritos-producto-eliminar");
const botonVaciar = document.querySelector(".favoritos-acciones-vaciar");


function cargarProductosFavoritos() {
    if (productosEnFavoritos && productosEnFavoritos.length > 0) {

        contenedorFavoritosVacio.classList.add("disabled");
        contenedorFavoritosProductos.classList.remove("disabled");
        contenedorFavoritosAcciones.classList.remove("disabled");

        contenedorFavoritosProductos.innerHTML = "";

        productosEnFavoritos.forEach(producto => {

            const div = document.createElement("div");
            div.classList.add("favorito-producto");
            div.innerHTML = `
                <img class="favorito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="favorito-producto-titulo">
                    <small>Título</small>
                    <h3>${producto.titulo}</h3>
                </div>
                <div class="favorito-producto-precio">
                    <small>Precio</small>
                    <p>$${producto.precio}</p>
                </div>
    
                <button class="favoritos-producto-eliminar" id="${producto.id}"><i class="bi bi-trash-fill"></i></button>
            `;

            contenedorFavoritosProductos.append(div);
        })

        actualizarBotonesEliminar();

    } else {
        contenedorFavoritosVacio.classList.remove("disabled");
        contenedorFavoritosProductos.classList.add("disabled");
        contenedorFavoritosAcciones.classList.add("disabled");
    }
}

cargarProductosFavoritos();

function actualizarBotonesEliminar() {
    botonesEliminar = document.querySelectorAll(".favoritos-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDeFavoritos);
    });
}


function eliminarDeFavoritos(e) {
    Toastify({
        text: "Producto eliminado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "linear-gradient(to right, #458942,#528443)",
            borderRadius: "2rem",
            textTransform: "uppercase",
            fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function () { } // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const index = productosEnFavoritos.findIndex(producto => producto.id === idBoton);

    productosEnFavoritos.splice(index, 1);
    cargarProductosFavoritos();

    localStorage.setItem("productos-en-favoritos", JSON.stringify(productosEnFavoritos));

}

botonVaciar.addEventListener("click", vaciarFavoritos);
function vaciarFavoritos() {

    Swal.fire({
        title: '¿Estás seguro?',
        icon: 'question',
        html: `Se van a borrar ${productosEnFavoritos.reduce((acc, producto) => acc + producto.cantidad, 0)} productos.`,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No'
    }).then((result) => {
        if (result.isConfirmed) {
            productosEnFavoritos.length = 0;
            localStorage.setItem("productos-en-favoritos", JSON.stringify(productosEnFavoritos));
            cargarProductosFavoritos();
        }
    })
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

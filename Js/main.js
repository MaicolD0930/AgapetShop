let productos = [];

fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".comprar");
let botonesFavoritos = document.querySelectorAll(".favorito");
let botonesDetalles = document.querySelectorAll(".detalles");
const numerito = document.querySelector("#numerito");
const numeroFavoritos = document.querySelector("#numeroFavoritos");


botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
}))


function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="producto-detalles">
                <h3 class="producto-titulo">${producto.titulo}</h3>
                <p class="producto-precio">$${producto.precio}</p>
                <div class="Botones">
                <button class="producto-agregar comprar" id="${producto.id}"><i class="bi bi-cart4"></i>
                </button>
                <button class="producto-agregar favorito" id="${producto.id}"><i class="bi bi-heart-fill"></i></button>
                <button class="producto-agregar detalles" id="${producto.id}"><i class="bi bi-eye-fill"></i></button>
                </div>
            </div>
        `;

        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
    actualizarBotonesFavoritos();
    actualizarBotonesDetalles();
}

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id !== "todos") {
            const categoriaId = e.currentTarget.id;
            const productosCategoria = productos.filter(producto => producto.categoria.id === categoriaId);
            tituloPrincipal.innerText = e.currentTarget.innerText; // Actualiza el título con el nombre de la categoría
            cargarProductos(productosCategoria);
        } else {
            tituloPrincipal.innerText = "Todos los productos";
            cargarProductos(productos);
        }
    });
});

//funcion que actualiza el boton de agregar 
function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".comprar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

//Funcion que actualiza el boton de favoritos 
function actualizarBotonesFavoritos() {
    botonesFavoritos = document.querySelectorAll(".favorito");
    botonesFavoritos.forEach(boton => {
        boton.addEventListener("click", agregarAfavoritos);
    });
}

// Funcion que actualiza el boton detalles
function actualizarBotonesDetalles() {
    botonesDetalles = document.querySelectorAll(".detalles");
    botonesDetalles.forEach(boton => {
        boton.addEventListener("click", agregarAdetalles);
    });
}

//Se llena el carrito de compras
let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

//Funcion que agrega los productos al carrito de compras 
function agregarAlCarrito(e) {

    Toastify({
        text: "Producto agregado",
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
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}

//Se llenan los favoritos
let productosEnFavoritos;
console.log(productosEnFavoritos);
let productosEnFavoritosLS = localStorage.getItem("productos-en-favoritos");
console.log(productosEnFavoritosLS);
if (productosEnFavoritosLS) {
    productosEnFavoritos = JSON.parse(productosEnFavoritosLS);
    actualizarCantFav();
} else {
    productosEnFavoritos = [];
}


let productosDetalles;
console.log(productosDetalles);
let productosDetallesLS = localStorage.getItem("productos-detalles");
console.log(productosDetallesLS);
if (productosDetallesLS) {
    productosDetalles = JSON.parse(productosDetallesLS);
} else {
    productosDetalles = [];
}



//Funcion que agrega los productos a favoritos
function agregarAfavoritos(e) {

    Toastify({
        text: "Producto agregado a la lista de deseos",
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
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if (productosEnFavoritos.some(producto => producto.id === idBoton)) {
        const index = productosEnFavoritos.findIndex(producto => producto.id === idBoton);
        productosEnFavoritos[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnFavoritos.push(productoAgregado);
    }

    actualizarCantFav();
    localStorage.setItem("productos-en-favoritos", JSON.stringify(productosEnFavoritos));

}

//Funcion que agrega los productos a favoritos
function agregarAdetalles(e) {
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    // Asegúrate de que productosDetalles esté inicializado
    if (!productosDetalles) {
        productosDetalles = [];
    }
    productosDetalles.push(productoAgregado);
    actualizarCantFav();
    localStorage.setItem("productos-detalles", JSON.stringify(productosDetalles));

    redireccionarADetalles(productoAgregado);
}



//Funcion que actualiza el numero de productos en el carro de compras
function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

//Funcion que se encarga de actualizar la cantidad de favoritos que el usuario marque
function actualizarCantFav() {
    // Crear un conjunto para almacenar productos únicos
    const productosUnicos = new Set();

    // Agregar cada producto único al conjunto
    productosEnFavoritos.forEach(producto => {
        productosUnicos.add(producto.id);
    });

    // Obtener la cantidad de productos únicos
    const cantidadProductosUnicos = productosUnicos.size;

    // Actualizar el número de favoritos en el elemento HTML
    numeroFavoritos.innerText = cantidadProductosUnicos;
}

function redireccionarADetalles(producto) {
    // Puedes obtener el ID del producto o cualquier otra información que necesites
    const idProducto = producto.id;

    // Redirige a detalles.html pasando el ID del producto como parámetro de consulta
    window.location.href = `DetalleProducto.html?id=${idProducto}`;
}




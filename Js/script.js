let signUp = document.getElementById("signUp");
let signIn = document.getElementById("signIn");
let nameInput = document.getElementById("nameInput");
let apellidoInput = document.getElementById("apellidoInput");
let direccionInput = document.getElementById("direccionInput");
let cedulaInput = document.getElementById("cedulaInput");
let contactoInput = document.getElementById("contactoInput");

let title = document.getElementById("title");
let forgotPassword = document.getElementById("forgotPassword");
let btnField = document.querySelector(".btn-field");
var ESTADO;
    $("#signIn").click(Inicio);
    function Inicio() {
    $("#nameInput").hide();
    $("#apellidoInput").hide();
    $("#direccionInput").hide();
    $("#cedulaInput").hide();
    $("#contactoInput").hide();
    
    $(".contenido-formulario").css("height","420px")
    $(".contenido-formulario").css("margin-top", "0px")
    title.innerHTML = "Iniciar sesión en Agapet";
    signUp.classList.add("disable");
    signIn.classList.remove("disable");
    forgotPassword.style.display = "block";
    
    // Agrega la clase signInActive cuando se inicia sesión
    btnField.classList.add("signInActive");
    ESTADO="Uno";
}
    $("#signUp").click(Regis);
    function Regis() {
    $("#nameInput").show();
    $("#apellidoInput").show();
    $("#direccionInput").show();
    $("#cedulaInput").show();
    $("#contactoInput").show();

    $(".contenido-formulario").css("height","600px")
    $(".contenido-formulario").css("margin-top", "20px")
    title.innerHTML = "¡Bienvenido a Agapet!";
    signUp.classList.remove("disable");
    signIn.classList.add("disable");
    forgotPassword.style.display = "none";

    // Quita la clase signInActive cuando se registra
    btnField.classList.remove("signInActive");
    ESTADO="Dos";
}
    var NUMEROS = /^[^\d]+$/;var CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var NombreG, ApellidoG, DireccionG, CedulaG, NumeroG, CorreoG, ContraseñaG, registrado;
    //Guardar Valores
    $("#signUp").click(function () {
    var nombre = $("#NombreImput").val();
    var apellido= $("#ApellidoImput").val();
    var direccion= $("#DireccionImput").val();
    var cedula= $("#CedulaImput").val();
    var numero= $("#NumeroImput").val();
    var correo = $("#CorreoImput").val();
    var contraseña= $("#ContraseñaImput").val();

    if ($.trim(nombre) === '') {
        alert('El campo nombre esta vacio');
    }else{
        if(!NUMEROS.test(nombre)){
            alert("El campo nombre, no puede contener numeros")
        }else{
            if ($.trim(apellido) === '') {
                alert('El campo apellido esta vacio');
            }else{
                if(!NUMEROS.test(apellido)){
                    alert("El campo apellido, no puede contener numeros")
                }else{
                    if ($.trim(direccion) === '') {
                        alert('El campo direccion esta vacio');
                    }else{
                        if ($.trim(cedula) === '') {
                            alert('El campo cedula esta vacio');
                        }else{
                            if(NUMEROS.test(cedula)){
                                alert("El campo cedula, no puede contener letras")
                            }else{
                                if ($.trim(numero) === '') {
                                    alert('El campo numero de contacto esta vacio');
                                }else{
                                    if(NUMEROS.test(numero)){
                                        alert("El campo numero, no puede contener letras")
                                    }else{
                                        if ($.trim(correo) === '') {
                                            alert('El campo correo esta vacio');
                                        }else{
                                            if (!CORREO.test(correo)){
                                                alert("El campo correo no cumple el formato ( Ejemplo@gmail.com )")
                                            }else{
                                                if ($.trim(contraseña) === '') {
                                                    alert('El campo contraseña esta vacio');
                                                }else{
                                                    if(contraseña.length < 8){
                                                        alert('La contraseña debe ser mayor a 8 caracteres');
                                                    }else{
                                                        NombreG = nombre; ApellidoG = apellido; DireccionG = direccion;
                                                        CedulaG = cedula; NumeroG = numero; CorreoG = correo;
                                                        ContraseñaG = contraseña;
                                                        DescripcionG="Añade tu descripcion!";
                                                        PerfilG="img/tips.png";
                                                        PortadaG="img/leon.jpeg";
                                                        localStorage.setItem('NombreG', NombreG);
                                                        localStorage.setItem('ApellidoG', ApellidoG);
                                                        localStorage.setItem('DireccionG', DireccionG);
                                                        localStorage.setItem('CedulaG', CedulaG);
                                                        localStorage.setItem('NumeroG', NumeroG);
                                                        localStorage.setItem('CorreoG', CorreoG);
                                                        localStorage.setItem('ContraseñaG', ContraseñaG);
                                                        localStorage.setItem('DescripcionG', DescripcionG);
                                                        localStorage.setItem('PerfilG', PerfilG);
                                                        localStorage.setItem('PortadaG', PortadaG);
                                                        alert("Su usuario fue creado con exito!, Bienvenido "+NombreG+" "+ApellidoG)
                                                        location.reload();
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
$(document).ready(function() {
CorreoG = localStorage.getItem('CorreoG');
ContraseñaG = localStorage.getItem('ContraseñaG');
$("#signIn").click(function () {
        if (($("#CorreoImput").val() === CorreoG) & ($("#ContraseñaImput").val() === ContraseñaG)) {
            alert("Iniciando Sesion...")
            registrado ="Si";
            localStorage.setItem('Registrado', registrado);
            window.location.href = "Inicio.html";
        }else{
            alert("Usuario y/o contraseña incorrecto"+ CorreoG+ ContraseñaG)

        }
});
});




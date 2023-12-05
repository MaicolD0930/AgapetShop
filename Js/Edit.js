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
        $("#edit-form-container").css("background-color", "black");
        $("#edit-form-container").css("color", "white");
        $("label").css("color", "white");
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
        $("#edit-form-container").css("background-color", "white");
        $("#edit-form-container").css("color", "black");
        $("label").css("color", "black");
        //Footer
    
      }
    });    
    
    var NUMEROS = /^[^\d]+$/;var CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var NombreG, ApellidoG, DireccionG, NumeroG, CorreoG, registrado, DescripcionG, PerfilG;
    //Guardar Valores
    $("#Guardar").click(function () {
    var nombre = $("#NombreImput").val();
    var apellido= $("#ApellidoImput").val();
    var direccion= $("#DireccionImput").val();
    var numero= $("#NumeroImput").val();
    var correo = $("#CorreoImput").val();
    var descripcion= $("#DescripcionImput").val();

    var portada = $('#PerfilImagen')[0];
    



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
                                        if (portada.files.length > 0) {
                                            PerfilG ="img/"+portada.files[0].name;
                                            NombreG = nombre; ApellidoG = apellido; DireccionG = direccion;
                                            NumeroG = numero; CorreoG = correo; DescripcionG = descripcion;
    
                                            localStorage.setItem('NombreG', NombreG);
                                            localStorage.setItem('ApellidoG', ApellidoG);
                                            localStorage.setItem('DireccionG', DireccionG);
                                            localStorage.setItem('NumeroG', NumeroG);
                                            localStorage.setItem('CorreoG', CorreoG);
                                            localStorage.setItem('DescripcionG', DescripcionG);
                                            localStorage.setItem('PerfilG', PerfilG);
                                            alert("Informacion actualizada!,  "+NombreG+" "+ApellidoG)
                                        } else {
                                            alert('Selecciona una imagen antes de intentar obtener el nombre.');
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

$("#Volver").click(function () {
    window.location.href = "perfil.html";
});



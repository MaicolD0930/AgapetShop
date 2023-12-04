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
                                            alert(PerfilG);
                                            NombreG = nombre; ApellidoG = apellido; DireccionG = direccion;
                                            NumeroG = numero; CorreoG = correo; DescripcionG = descripcion;
    
                                            localStorage.setItem('NombreG', NombreG);
                                            localStorage.setItem('ApellidoG', ApellidoG);
                                            localStorage.setItem('DireccionG', DireccionG);
                                            localStorage.setItem('NumeroG', NumeroG);
                                            localStorage.setItem('CorreoG', CorreoG);
                                            localStorage.setItem('DescripcionG', DescripcionG);
                                            localStorage.setItem('PerfilG', PerfilG);
                                            alert("Su usuario fue creado con exito!, Bienvenido "+NombreG+" "+ApellidoG)
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





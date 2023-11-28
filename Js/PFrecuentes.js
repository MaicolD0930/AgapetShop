$(document).ready(function() {
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();
    $("#p5").hide();
    $("#p6").hide();

        //Redireccionar botones
        $("#Fav").click(function() {
            window.location.href = "ProductoFavorito.html";
        });
        
    $('.Boton').click(function() {
        $('.Boton').removeClass('seleccionado');
        $(this).addClass('seleccionado');
        var botonId = $(this).attr('id');
        if(botonId === "P1"){
            $("#p1").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P2"){
            $("#p2").show();
            $("#p1").hide();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P3"){
            $("#p3").show();
            $("#p2").hide();
            $("#p1").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P4"){
            $("#p4").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p1").hide();
            $("#p5").hide();
            $("#p6").hide();
        }
        else if(botonId === "P5"){
            $("#p5").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p1").hide();
            $("#p4").hide();
            $("#p6").hide();
        }
        else if(botonId === "P6"){
            $("#p6").show();
            $("#p2").hide();
            $("#p3").hide();
            $("#p4").hide();
            $("#p5").hide();
            $("#p1").hide();
        }

      });

});
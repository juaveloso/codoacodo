function boton(){
    cantidad=parseInt(document.getElementById("cantidad").value);
    categoria=document.getElementById("categoria").value;
    descuento=0;
    valorTicket=200;
    importe=0;
    importeDescuento=0;
    switch (categoria){
        case "Estudiante": descuento=80;break;

        case "Junior": descuento=15;break;

        case "Trainee": descuento=50;break;
    }
    importe=cantidad*valorTicket;
    importeDescuento=importe - (descuento*importe/100);
    document.getElementById("resultado").value= "Total a pagar: $" +importeDescuento;
}

function borrar(){
    document.getElementById("cantidad").value="";
    document.getElementById("categoria").value="";
    document.getElementById("resultado").value="";
}


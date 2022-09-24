let nombreProductoA = "remeras"
let precioProductoA = 100
let stockProductoA = 102

let nombreProductoB = "pantalones"
let precioProductoB = 80
let stockProductoB = 243

let nombreProductoC = "shorts"
let precioProductoC = 60
let stockProductoC = 151

let nombreProductoD = "camperas"
let precioProductoD = 140
let stockProductoD = 122

let nombreProductoE = "gorros"
let precioProductoE = 30
let stockProductoE = 53

function bienvenida(nombre, apellido){
    alert("Bienvenido " + nombre + " " + apellido)
}

function calcularIva(a){
    precioConIva = a + a * 0.21
    alert("El precio total de la compra con IVA (21%) es de " + precioConIva)
}

nombre = prompt("Ingrese su nombre: ")
apellido = prompt("Ingrese su apellido: ")

bienvenida(nombre, apellido)

let precioTotal = 0

let texto = prompt("Ingrese SI para continuar con la compra \nIngrese NO para salir de la tienda")
if(texto == "SI"){
    let compraRemeras = prompt("Ingrese el numero de " + nombreProductoA + " que quiera comprar, su valor es de " + precioProductoA)
    if(compraRemeras <= stockProductoA){
        precioTotal = precioTotal + compraRemeras * precioProductoA
    }
    else{
        alert("No hay stock suficiente de este producto")
    }
    let compraPantalones = prompt("Ingrese el numero de " + nombreProductoB + " que quiera comprar, su valor es de " + precioProductoB)
    if(compraPantalones <= stockProductoB){
        precioTotal = precioTotal + compraPantalones * precioProductoB
    }
    else{alert("No hay stock suficiente de este producto")}

    let compraShorts = prompt("Ingrese el numero de " + nombreProductoC + " que quiera comprar, su valor es de " + precioProductoC)
    if(compraShorts <= stockProductoC){
        precioTotal = precioTotal + compraShorts * precioProductoC
    }
    else{alert("No hay stock suficiente de este producto")}

    let compraCamperas = prompt("Ingrese el numero de " + nombreProductoD + " que quiera comprar, su valor es de " + precioProductoD)
    if(compraCamperas <= stockProductoD){
        precioTotal = precioTotal + compraCamperas * precioProductoD
    }
    else{alert("No hay stock suficiente de este productoS")}

    let compraGorros = prompt("Ingrese el numero de " + nombreProductoE + " que quiera comprar, su valor es de " + precioProductoE)
    if(compraGorros <= stockProductoE){
        precioTotal = precioTotal + compraGorros * precioProductoE
    }
    else{alert("No hay stock suficiente de este producto")}

    alert("El precio total de la compra sin IVA es de " + precioTotal )

    calcularIva(precioTotal)

    alert("Gracias por su compra :)")
}
else{
    alert("Gracias por su respuesta")
}


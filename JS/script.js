/* function Producto(nombre, precio, stock, img, categoria){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock;
    this.img = img;
    this.cat = categoria;
}

let productoA = new Producto("Remera Gris", 100, 102, "../img/ropa/ropa_1.jpg", "remeras")
let productoB = new Producto("Pantalon Amarillo", 80, 243, "../img/ropa/ropa_14.png", "pantalones")
let productoC = new Producto("Short con Logo", 60, 151, "../img/ropa/ropa_4.jpg", "shorts")
let productoD = new Producto("Campera azul", 140, 0, "../img/ropa/ropa_2.jpg", "camperas")
let productoE = new Producto("Gorro con Logo", 30, 53, "../img/ropa/ropa_7.png", "gorros")

let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

let catalogo = document.getElementById("catalogo")


function render(lista) {
    catalogo.innerHTML = ""

    for(const prod of lista){

        let card = document.createElement("div")
    
        card.className = "card"
    
        card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p><img width="300" height="300" src=${prod.img}></img>`
    
        catalogo.append(card)
    } 
}

let categoriaElegida = ''

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value} )

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)

let botonTodos = document.getElementById("todos")

botonTodos.addEventListener("click", ()=>{render(listaProductosConStock)})

function filtrado(){
    let filtroActual = listaProductos.filter((prod)=>prod.cat == categoriaElegida)
    if(filtroActual.length == 0){
        console.log("Esa categoría no existe")
    }
    render(filtroActual)
}

for(const prod of filtroActual){
    let card = document.createElement("div")
    card.className = "card"

    card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p><img width="300" height="300" src=${prod.img}></img>`

    catalogo.append(card)
}
 */
/*----------------------------------------------------------------------------------------------------*/

//Contador 
/* let acumulador = 0

function contador(valorInicial){
    acumulador += 1
    console.log(acumulador)
}


boton.addEventListener("click", contador)



let input1 = document.getElementById("nombre")
let nombreIngresado = ''

input1.addEventListener('change', ()=>{nombreIngresado = input1.value;
                                        input1.value = ""})

function mostrarPorConsola(nombre){
    console.log("Bienvenido " + nombre)
}


boton.addEventListener("click", ()=>{mostrarPorConsola(nombreIngresado)}) 

let formulario = document.getElementById("formulario")

formulario.addEventListener("submit", submitHandler)

function submitHandler(evento){
    evento.preventDefault()
    console.log(evento.target.children[0].value)
    console.log(evento.target.children[1].value)
}


alert("En nuestra tienda, usted puede encontrar los siguientes productos con stock: \n - " + listaNombres.join("\n - "))


nombre = prompt("Ingrese su nombre: ")
apellido = prompt("Ingrese su apellido: ")

bienvenida(nombre, apellido)


let texto = prompt("Ingrese SI para continuar con la compra \nIngrese NO para salir de la tienda").toUpperCase()
if(texto == "SI"){
    let compraProductoA = prompt("Ingrese el numero de " + productoA.nombre + " que quiera comprar, su valor es de " + productoA.precio)
    calculoStock(compraProductoA, productoA.stock, productoA.precio)

    let compraProductoB = prompt("Ingrese el numero de " + productoB.nombre + " que quiera comprar, su valor es de " + productoB.precio)
    calculoStock(compraProductoB, productoB.stock, productoB.precio)

    let compraProductoC = prompt("Ingrese el numero de " + productoC.nombre + " que quiera comprar, su valor es de " + productoC.precio)
    calculoStock(compraProductoC, productoC.stock, productoC.precio)

    let compraProductoD = prompt("Ingrese el numero de " + productoD.nombre + " que quiera comprar, su valor es de " + productoD.precio)
    calculoStock(compraProductoD, productoD.stock, productoD.precio)
    
    let compraProductoE = prompt("Ingrese el numero de " + productoE.nombre + " que quiera comprar, su valor es de " + productoE.precio)
    calculoStock(compraProductoE, productoE.stock, productoE.precio)

    alert("El precio total de la compra sin IVA es de " + precioTotal )

    calcularIva(precioTotal)
    alert("Gracias por su compra :)")
}
else{
    alert("Gracias por su respuesta")
} 

function bienvenida(nombre, apellido){
    alert("Bienvenido " + nombre + " " + apellido)
}

function calcularIva(precioTotal){
    precioConIva = precioTotal + precioTotal * 0.21
    alert("El precio total de la compra con IVA (21%) es de " + precioConIva)
}

function calculoPrecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculoStock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoPrecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}
 */
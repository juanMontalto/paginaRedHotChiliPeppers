const listaDeProductos = [
    {
        id: 1,
        nombre: "Remera",
        precio: 100,
        stock: 103,
    },{
        id: 2,
        nombre: "Campera",
        precio: 200,
        stock: 13
    },{
        id: 3,
        nombre: "Buzo",
        precio: 120,
        stock: 153
    },{
        id: 4,
        nombre: "Short",
        precio: 70,
        stock: 166
    },{
        id: 5,
        nombre: "Gorra",
        precio: 80,
        stock: 124
    }
] 

let catalog = document.getElementById('items')
let cartList = document.getElementById('carrito')
let buttomEmpty = document.getElementById('boton-vaciar')
let totalValue = document.getElementById('total')
let cart = []

buttomEmpty.addEventListener('click', emptyButtonHandler)

loadCartFromStorage()
renderCart()


listaDeProductos.forEach((prod) => {
    let container = document.createElement('div')
    container.classList.add('card', 'col-sm-4')
    //Body
    let cardBody = document.createElement("div")
    cardBody.classList.add('card-body')
    //Title
    let cardTitle = document.createElement("h5")
    cardTitle.classList.add('card-title')
    cardTitle.innerText = prod.nombre
    //Precio
    let cardPrice = document.createElement("p")
    cardPrice.classList.add('card-title')
    cardPrice.innerText = `$${prod.precio}`
    //Stock
    let cardStock = document.createElement("p")
    cardStock.classList.add('card-text')
    cardStock.innerText = `Stock: ${prod.stock}`
    //Boton
    let cardButton = document.createElement("button")
    cardButton.classList.add('btn', 'btn-primary')
    cardButton.innerText = `Comprar`
    cardButton.setAttribute('mark', prod.id)
    cardButton.addEventListener('click', addProdToCart)

    cardBody.append(cardTitle)
    cardBody.append(cardPrice)
    cardBody.append(cardStock)
    cardBody.append(cardButton)
    container.append(cardBody)
    catalog.append(cardBody)
})

function addProdToCart(event){
    let id = event.target.getAttribute('mark')
    cart.push(id)
    renderCart()

    Toastify({
        text: `Agregaste correctamente el producto con ID: ${id}`,
        className: "info",
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        gravity: "bottom" 
      }).showToast();
}

function renderCart(){

    saveCartToStorage()

    cartList.innerHTML = ''

    let cartWithoutRepeatedElements = [...new Set(cart)]

    cartWithoutRepeatedElements.forEach((itemId) => {
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })
        let quantity = cart.reduce((total, id) => {
            return id === itemId ? total += 1 : total
        }, 0)

    let linea = document.createElement('li')
    linea.classList.add('list-group-item', 'text-right', 'mx-2')
    linea.innerText = `${quantity} x ${item[0].nombre} - $${item[0].precio}`

    let buttonDelete = document.createElement('button')
    buttonDelete.classList.add('btn', 'btn-danger', 'mx-5')
    buttonDelete.innerText = 'X'
    buttonDelete.dataset.item = itemId
    buttonDelete.addEventListener('click', deleteProduct)
    
    linea.append(buttonDelete)
    cartList.append(linea)
    })

    totalValue.innerText = calculateTotalPrice()
}

function deleteProduct(event){
    Swal.fire({
        title: 'Estas seguro de eliminar este producto?',
        showDenyButton: true,
        confirmButtonText: 'Eliminar',
        denyButtonText: `Cancelar`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            let id = event.target.dataset.item
            cart = cart.filter((cartId) => {
                return cartId != id
            })
            renderCart()
          Swal.fire('Eliminado!', '', 'success')
        } else if (result.isDenied) {
          Swal.fire('No se elimino el producto', '', 'info')
        }
    })
}

function emptyButtonHandler(){
    console.log(cart)
    cart = []
    console.log(cart)
    cartList.innerHTML = ''
    totalValue.innerText = 0
    Swal.fire({
        text: 'Eliminaste todos los productos correctamente',
        icon: 'success',
        timer: '1200',
    })
    renderCart()
}

function calculateTotalPrice(){
    return cart.reduce((total, itemId) =>{
        let item = listaDeProductos.filter((producto) => {
            return producto.id === parseInt(itemId)
        })

        return total + item[0].precio
    }, 0)
}

function saveCartToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart))
}

function loadCartFromStorage(){
    if(localStorage.getItem('cart') !== null)
    cart = JSON.parse(localStorage.getItem('cart'))
}



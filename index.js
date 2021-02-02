/**
 * Logicapara crear los pedidos del usuario
 */

const user = {
    name: "Raul",
    age: 20,
    debt: 0
}

let order = []
let priceOrder = 0

/**
 * Lista todo los productos del menu en un fromato amigable
 */
const showMenu = () => {
    console.log(`CODE - NAME PRODUCT - PRICE`)
    //products.forEach(product => console.log(`${product.code} - ${product.name} - $${product.price}`))
    for(let product of products){
        console.log(`${product.code} - ${product.name} - $${product.price}`)
    }
} 

/**
 * Funcion  que permite realizar pedido.
 */
const orderProduct = (cod) =>{
    if(!cod) return "Ingrese un codigo valido!"

    const foundProduct = products.find(product => product.code === cod)
    if(!foundProduct) return "El producto no existe"

    order.push(foundProduct)
    console.log("El producto ha sido agregado a su pedido. Su pedido es : ")
    return showOrder()
}

/**
 * Permite Mostrar el pedido
 */
const showOrder = () => order

/**
 * Permite calcular el precio total
 */
const calculatePrice = () => {
    let price = 0
    for(product of order){
        price += product.price
    }
    priceOrder = price
    return priceOrder
}


/**
 * Permite finalizar el pedido
 */
const finallyOrder = () =>{
    calculatePrice()
    user.debt = priceOrder

    order = []
    priceOrder = 0

    return `${user.name}, tu debes pagar $${user.debt} dólares.`
}


/**
 * Permite pagar el pedido
 */
const payOrder = amountEntered => {

    if (typeof amountEntered === "number"){

    if(amountEntered < user.debt) {
        return `No te alcanza par apagar tu pedido.`
    }else if (amountEntered === user.debt){
        salesMade += user.debt
        user.debt = 0
        return `Tu pedido ha sido pagado`
    } else{
        let change = amountEntered - user.debt
        salesMade += user.debt
        user.debt = 0
        return `Tu pedido ha sido pagado y tu cambio es de ${change} dólares.`
        }
    } else{
        return "Dato ingresado de forma erronea!"
    }
} 

let salesMade = 0
const seeSalesMades = () => `Monto total de ventas realizadas: ${salesMade}` 

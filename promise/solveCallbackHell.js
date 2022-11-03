// A popular JS term
// when does it happens
// when callbacks are used unnecessarily

// Example - Ecommerce
// 1. Select an item
// 2. Add to cart
// 3. payment
// 4. update order

function select() {
    console.log("Item Selected");
}

function addToCart() {
    console.log("Item Added to cart")
}

function payment() {
    console.log("Payment done")
}

function updateOrder() {
    console.log("Order updated")
}

const buyItem = new Promise((resolve, reject) => {
    resolve()
})

buyItem.then(() => {
    select()
}).then(() => {
    addToCart()
}).then(() => {
    payment()
}).then(() => {
    updateOrder()
}).catch(() => {
    console.log("Error")
}).finally(() => {
    console.log("Product Purchased")
})

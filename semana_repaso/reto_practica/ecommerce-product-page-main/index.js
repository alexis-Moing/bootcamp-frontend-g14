let quantityProduct = 0;
let totalQuantityCart = 0;

const displayValue = document.getElementById("quantity-product");

const displayTotalCart = document.getElementById("quantity-cart");



document.getElementById("button-minus").addEventListener("click", () => {
    console.log('hola hiciste click en el boton -');
    if (quantityProduct > 0) {
        quantityProduct--;
        displayValue.textContent = quantityProduct;

    };
} );

document.getElementById("quantity-product").addEventListener("click", () => {
    console.log('hola hiciste click en la cantidad');
    
    
} );

document.getElementById("button-plus").addEventListener("click", () => {
    console.log('hola hiciste click en el boton +');
    quantityProduct++;
    displayValue.textContent = quantityProduct;
} );

document.getElementById("add-to-cart").addEventListener("click", () => {
    console.log('hola hiciste click en el boton añadir al carrito');
    totalQuantityCart = quantityProduct + 0;
    displayTotalCart.textContent = totalQuantityCart;
} );


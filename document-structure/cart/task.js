const products = document.querySelectorAll('.product');
const controls = document.querySelectorAll('.product__quantity-controls');
const cart = document.querySelector('.cart__products');

products.forEach(item => item.querySelector('.product__add').addEventListener('click', addProduct));

function addProduct(event) {
    const target = event.target;
    const product = target.closest('.product');
    const idProduct = product.dataset.id;
    const srcImg = product.querySelector('.product__image').getAttribute('src');
    const countValToCart = +product.querySelector('.product__quantity-value').innerText;
    const cartProducts = cart.querySelectorAll('.cart__product');
    const cartProductsArr = Array.from(cartProducts);
    const productExist = cartProductsArr.find(item => item.dataset.id == idProduct);
    if (productExist) {
        let countValInCart = productExist.querySelector('.cart__product-count');
        let c = +countValInCart.innerText;
        let sum = c + countValToCart;
        countValInCart.innerText = `${sum}`
    } else {
    cart.insertAdjacentHTML("afterBegin", `
        <div class="cart__product" data-id="${idProduct}">
            <img class="cart__product-image" src="${srcImg}">
            <div class="cart__product-count">${countValToCart}</div>
        </div>
    `);
    };
    product.querySelector('.product__quantity-value').innerText = "1";
};

function changeCount(event) {
    const target = event.target;
    const product = target.closest('.product');    
    const countAdd = product.querySelector('.product__quantity-value');
    let countVal = +countAdd.innerText;    
    if (target && target.classList.contains('product__quantity-control_dec') && countVal > 1) {
        countVal -= 1;
    } else if (target && target.classList.contains('product__quantity-control_inc')) {
        countVal += 1;
    }
    countAdd.innerText = `${countVal}`;    
};

controls.forEach(item => item.addEventListener('click', changeCount));
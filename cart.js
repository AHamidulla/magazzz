const cartItemsContainer = document.getElementById('cartItems');
const totalItemsElement = document.getElementById('totalItems');
const totalPriceElement = document.getElementById('totalPrice');

let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

function renderCart() {
    cartItemsContainer.innerHTML = '';

    if (cartItems.length > 0) {
        let totalItems = 0;
        let totalPrice = 0;

        cartItems.forEach((item, index) => {
            totalItems += 1;
            totalPrice += item.price;

            const itemElement = document.createElement('div');
            itemElement.classList.add('cart-item');
            itemElement.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p>Цена: $${item.price.toFixed(2)}</p>
                </div>
                <button class="remove-button" data-index="${index}">Удалить</button>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        totalItemsElement.textContent = totalItems;
        totalPriceElement.textContent = totalPrice.toFixed(2);
    } else {
        cartItemsContainer.innerHTML = '<p>Ваша корзина пуста.</p>';
        totalItemsElement.textContent = 0;
        totalPriceElement.textContent = '0.00';
    }
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cartItems));
    renderCart();
}

cartItemsContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('remove-button')) {
        const index = e.target.getAttribute('data-index');
        removeFromCart(index);
    }
});

renderCart();

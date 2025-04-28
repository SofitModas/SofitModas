let cart = [];

// Função para adicionar produto ao carrinho
function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

// Atualiza os itens no carrinho
function updateCart() {
    const cartItemsDiv = document.querySelector('.cart-items');
    cartItemsDiv.innerHTML = '';
    cart.forEach(item => {
        const div = document.createElement('div');
        div.textContent = `${item.productName} - R$ ${item.price}`;
        cartItemsDiv.appendChild(div);
    });
}

// Função de checkout (redireciona para o WhatsApp)
document.querySelector('#checkout').addEventListener('click', () => {
    let message = 'Olá! Quero finalizar minha compra:\n';
    let total = 0;
    cart.forEach(item => {
        message += `${item.productName} - R$ ${item.price}\n`;
        total += item.price;
    });
    message += `Total: R$ ${total.toFixed(2)}`;
    window.location.href = `https://wa.me/seunumerodetelefone?text=${encodeURIComponent(message)}`;
});

// Adicionar produtos ao carrinho
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', () => {
        const productNames = [
            'Conjunto Top e Short',
            'Calça Avulsa Poliamida',
            'Short Suplex'
        ];
        const prices = [99.90, 79.90, 49.90];
        addToCart(productNames[index], prices[index]);
    });
});

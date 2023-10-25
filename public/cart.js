// Cart functionality
const cart = [];
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

function addToCart(product) {
    cart.push(product);
    displayCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    displayCart();
}

function calculateTotal() {
    return cart.reduce((total, item) => total + item.price, 0);
}

function displayCart() {
    cartItems.innerHTML = "";
    let total = calculateTotal();
    cart.forEach((item, index) => {
        cartItems.innerHTML += `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <p>${item.title}</p>
                <p>Ksh ${item.price.toFixed(2)}</p>
                <p>Rating: ${item.rating} stars</p> <!-- Display the rating -->
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    });
    cartTotal.textContent = `Total: Ksh ${total.toFixed(2)}`;
}




// If you want to add items to the cart programmatically, you can call the addToCart function like this:
// addToCart({
//     id: 0,
//     image: 'image/5 Emotionally Intelligent Habits For Handling Frustration At Work - TechTello.jpg',
//     title: '',
//     price: 133,
// });

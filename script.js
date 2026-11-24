let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name: name, price: price });
    total = total + price;
    displayCart();
}

function displayCart() {
    let cartDiv = document.getElementById("cart");

    cartDiv.innerHTML = "";

    cart.forEach(function(product, index) {
        cartDiv.innerHTML += `
            <p>
                ${product.name} - ₹${product.price}
                <button onclick="removeFromCart(${index})">Remove</button>
            </p>
        `;
    });

    if (cart.length === 0) {
        cartDiv.innerHTML = "<p>No products added yet.</p>";
    }

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeFromCart(index) {
    total = total - cart[index].price;
    cart.splice(index, 1);
    displayCart();
}
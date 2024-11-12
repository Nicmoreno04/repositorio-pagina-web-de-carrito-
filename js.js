// Abrir y cerrar el carrito cuando se hace clic en el botón con id "cartToggle"
document.getElementById("cartToggle").addEventListener("click", function() {
    document.getElementById("cartSidebar").classList.toggle("open"); // Cambia la clase "open" para mostrar u ocultar el carrito
});

// Cerrar el carrito cuando se hace clic en el botón con id "backToMenu"
document.getElementById("backToMenu").addEventListener("click", function() {
    document.getElementById("cartSidebar").classList.remove("open"); // Elimina la clase "open" para ocultar el carrito
});

// Selecciona todos los botones de "Agregar al carrito" tanto de productos como de promociones
const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.getElementById("cartItems"); // Lista donde se mostrarán los artículos agregados al carrito

// Agrega un evento "click" a cada botón de "Agregar al carrito"
addToCartButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Obtiene el nombre del artículo desde "h5" para productos y desde "p.card-text" para promociones
        const itemName = button.parentElement.querySelector("h5") 
                        ? button.parentElement.querySelector("h5").innerText 
                        : button.parentElement.querySelector(".card-text").innerText;

        // Obtiene el precio del artículo desde el elemento "h3"
        const itemPrice = button.parentElement.querySelector("h3").innerText;
        
        // Agrega el artículo al carrito y guarda el carrito en el almacenamiento local
        addItemToCart(itemName, itemPrice);
        saveCart();
    });
});

// Función para agregar un artículo al carrito visualmente en la lista
function addItemToCart(name, price) {
    // Crea un nuevo elemento <li> para el artículo
    const cartItem = document.createElement("li");
    cartItem.innerHTML = 
        `${name} - ${price}
        <button class="remove-item" onclick="removeItem(this)"></button>`; // Muestra el nombre, precio y un botón para eliminar
    cartItemsList.appendChild(cartItem); // Agrega el elemento <li> a la lista del carrito
    saveCart(); // Guarda el carrito actualizado en el almacenamiento local
}

// Función para guardar el carrito en almacenamiento local del navegador
function saveCart() {
    // Crea un array de objetos que representan cada artículo en el carrito
    const cartItems = Array.from(cartItemsList.children).map(item => ({
        name: item.innerText.split(" - ")[0], // Toma la parte del nombre del texto del <li>
        price: item.innerText.split(" - ")[1], // Toma la parte del precio del texto del <li>
    }));
    // Guarda el array como una cadena JSON en el almacenamiento local
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}

// Función para eliminar un artículo del carrito
function removeItem(button) {
    button.parentElement.remove(); // Elimina el elemento <li> correspondiente al artículo
    saveCart(); // Guarda el carrito actualizado en el almacenamiento local
}

// Restaura los artículos guardados en el carrito al cargar la página
window.addEventListener("load", function() {
    const savedItems = JSON.parse(localStorage.getItem("cartItems")) || []; // Recupera los artículos guardados o un array vacío si no hay
    savedItems.forEach(item => addItemToCart(item.name, item.price)); // Agrega cada artículo guardado al carrito visual
});
// Confirmación del pedido
document.getElementById("submitOrder").addEventListener("click", () => {
    // Aquí se puede validar el número de tarjeta y teléfono si es necesario
    new bootstrap.Modal(document.getElementById("orderModal")).show();
    localStorage.removeItem("cartItems"); // Limpiar carrito
    cartItemsList.innerHTML = ""; // Limpiar lista
});
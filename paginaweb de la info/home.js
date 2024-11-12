function handleSearch(event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Obtén el valor de búsqueda del input
    const searchQuery = document.getElementById("searchInput").value.toLowerCase();

    // Define un diccionario de rutas según los términos de búsqueda
    const pages = {
        hamburguesas: "hamburguesa.html",
        hamburguesa: "hamburguesa.html",
        perros: "perros.html",
        perro: "perros.html",
        salchipapas: "salchipapa.html",
        salchipapa: "salchipapa.html",
        otras : "otras.html",
        lasagna: "otras_comidas.html#lasagna",
        alitas: "otras.html",
        mazorcada: "otras.html",
        arepa : "otras.html",
        patacon: "otras.html"
    };

    // Verifica si la búsqueda coincide con alguna clave en el diccionario
    if (pages[searchQuery]) {
        window.location.href = pages[searchQuery];
    } else {
        alert("No se encontró la comida. Intenta con otro nombre.");
    }
}
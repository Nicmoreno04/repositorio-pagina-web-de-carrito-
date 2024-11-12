// Función para actualizar la miga de pan
function updateBreadcrumb() {
    const breadcrumbNav = document.getElementById('breadcrumbNav');
    const currentBreadcrumb = document.getElementById('currentBreadcrumb');
    const page = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual

    // Definimos las etiquetas de miga de pan según la página
    const breadcrumbLabels = {
        'hamburguesa.html': 'Hamburguesas',
        'perros.html': 'Perros',
        'salchipapa.html': 'Salchipapas',
        'otras.html': 'Otras Comidas'
    };

    // Si estamos en una página con una miga de pan específica, mostrarla
    if (breadcrumbLabels[page]) {
        breadcrumbNav.style.display = 'block';  // Muestra la miga de pan
        currentBreadcrumb.textContent = breadcrumbLabels[page];  // Establece el texto actual
    } else {
        breadcrumbNav.style.display = 'none';  // Oculta la miga de pan en 'home'
    }
}

// Ejecuta la función de miga de pan al cargar la página
window.onload = updateBreadcrumb;
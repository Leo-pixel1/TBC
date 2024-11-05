function startApp() {
    // Ocultar la pantalla de inicio y mostrar la cuadrícula
    document.getElementById("splash-screen").style.display = "none";
    document.getElementById("grid").classList.remove("hidden");
}

function toggleExpand(element) {
    // Obtener todas las tarjetas
    const cards = document.querySelectorAll('.card');
    
    // Cerrar cualquier tarjeta que esté abierta
    cards.forEach(card => {
        if (card !== element) {
            card.classList.remove('expanded');
        }
    });
    
    // Alternar la clase 'expanded' en la tarjeta clicada
    element.classList.toggle('expanded');
}

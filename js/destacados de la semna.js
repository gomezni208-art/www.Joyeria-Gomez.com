// Usamos DOMContentLoaded para asegurar que el HTML ya existe
document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('productTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    // Verificamos en consola si los elementos existen (si ves error aquí, revisa los IDs en el HTML)
    if (!track || !nextBtn || !prevBtn) {
        console.error("No se encontraron los elementos del carrusel. Revisa los IDs en tu HTML.");
        return;
    }

    nextBtn.addEventListener('click', () => {
        track.style.transform = 'translateX(-50%)';
        
        // Manejo de visibilidad
        nextBtn.style.display = 'none';
        prevBtn.style.display = 'flex';
    });

    prevBtn.addEventListener('click', () => {
        track.style.transform = 'translateX(0%)';
        
        // Manejo de visibilidad
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'flex';
    });
});

const track = document.querySelector('.carousel-track');
let index = 0;

function moveCarousel() {
    index++;
    if (index > 1) { 
        index = 0; 
    }
    
    // Ahora movemos el 100% del ancho de una imagen
    track.style.transform = `translateX(-${index * 100}%)`;
}

// Cada 5 segundos
setInterval(moveCarousel, 5000);
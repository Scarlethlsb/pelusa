document.addEventListener("DOMContentLoaded", () => {
    // Animación al hacer hover sobre los actores
    const actorItems = document.querySelectorAll(".actor-item");
    actorItems.forEach(item => {
        item.addEventListener("mouseover", () => {
            item.style.transform = "scale(1.1)";
            item.style.boxShadow = "0 0 25px rgba(255, 255, 255, 0.5)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
            item.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.3)";
        });
    });

    // Mostrar un mensaje cuando se hace clic en un actor
    actorItems.forEach(item => {
        item.addEventListener("click", () => {
            const actorName = item.querySelector("p").innerText;
            alert(`¡Has seleccionado a ${actorName} como tu favorito!`);
        });
    });
});

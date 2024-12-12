
addEventListener("DOMContentLoaded", () => scroll_animation())

const body = document.querySelector('body');

// Initialisation de l'observateur
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // L'élément est visible
            entry.target.style.animation = "slide_right 1s ease-out forwards";
            console.log("L'élément est visible");
        } else {
            // L'élément n'est plus visible
            console.log("L'élément n'est plus visible");
        }
    });
}, { threshold: 0.5 }); // Option : 50% de l'élément visible pour déclencher

// Ajouter les enfants du parent dans l'observateur
Array.from(b.children).forEach(child => {
    observer.observe(child);
});

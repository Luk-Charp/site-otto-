// Sélectionne toutes les images des produits
const images = document.querySelectorAll('.best-sales__products div img');

// Fonction pour vérifier la visibilité des images
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        // Si l'image est visible
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Ajouter la classe 'visible'
        } else {
            entry.target.classList.remove('visible');  // Enlever la classe 'visible' si l'image n'est plus visible
        }
    });
}, {
    threshold: 0.2 // Déclencher lorsque 20% de l'image est visible
});

// Observer chaque image
images.forEach(image => {
    observer.observe(image);
});

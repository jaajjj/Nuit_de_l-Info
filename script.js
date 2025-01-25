// Ciblage des éléments
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");

// Gestion de l'affichage du menu
menuToggle.addEventListener("click", () => {
    sidebar.classList.toggle("active"); // Ajoute ou retire la classe active pour ouvrir/fermer le menu
});

// Fonction qui vérifie si un élément est dans la vue
function isInView(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
}

// Cibler l'élément h2 de la section "intro"
const introHeading = document.querySelector('#intro h2');

// Ajouter ou supprimer la classe "visible" lors du défilement
function handleScroll() {
    if (isInView(introHeading)) {
        introHeading.classList.add('visible');
    } else {
        introHeading.classList.remove('visible');
    }
}

// Exécuter handleScroll lors du défilement de la page
window.addEventListener('scroll', handleScroll);

// Initialiser la fonction pour que les éléments déjà visibles bénéficient de l'animation au chargement
document.addEventListener('DOMContentLoaded', handleScroll);

// Gestion de la sélection des images
const images = document.querySelectorAll('.interactive1 img');
const descriptionText = document.getElementById('description-text');

// Descriptions associées à chaque image
const descriptions = {
    globules: "Bien que les globules rouges jouent un rôle vital dans le transport de l'oxygène, ils ne sont pas directement constitués principalement d'eau. Cependant, l'eau est essentielle pour leur transport dans le sang, qui est majoritairement composé d'eau.",
    cellules: "Les cellules sont majoritairement constituées d'eau. Elles font partie des 60 % d'eau du corps humain et sont essentielles pour toutes les fonctions biologiques, y compris la division cellulaire et la production d'énergie.",
    os: "Bien qu'en grande partie faits de minéraux et de collagène, contiennent une certaine quantité d'eau, nécessaire à leur flexibilité et leur résistance, mais ils ne sont pas aussi riches en eau que les cellules."
};

// Ajouter un gestionnaire d'événements à chaque image
images.forEach(image => {
    image.addEventListener('click', () => {
        // Retirer la classe 'selected' de toutes les images
        images.forEach(img => img.classList.remove('selected'));

        // Ajouter la classe 'selected' à l'image cliquée
        image.classList.add('selected');

        // Mettre à jour la description
        const id = image.id; // Récupérer l'ID de l'image
        descriptionText.textContent = descriptions[id];

        // Appliquer les styles spécifiques selon l'image cliquée
        if (id === "cellules") {
            image.classList.add("correct"); // Vert pour cellules
        } else {
            image.classList.add("incorrect"); // Rouge pour globules et os
        }
    });
});
const animationContainer = document.getElementById('animation-container');

const merciButton = document.getElementById("merci-button");
const particleContainer = document.getElementById("particle-container");
const terreImage = document.querySelector(".terre-image");

merciButton.addEventListener("click", () => {
    // Ajouter une animation à l'image de la Terre
    terreImage.classList.add("animated");

    // Générer des particules
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");
        const size = Math.random() * 8 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particleContainer.appendChild(particle);

        // Supprimer les particules après l'animation
        setTimeout(() => particle.remove(), 2000);
    }

    // Supprimer l'animation de la Terre pour qu'elle puisse être rejouée
    terreImage.addEventListener("animationend", () => {
        terreImage.classList.remove("animated");
    });
});
document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let feedback = document.getElementById("quizFeedback");
    let correctAnswers = {
        q1: "b",  // Réponse correcte à la question 1
        q2: "a",  // Réponse correcte à la question 2
        q3: "b",  // Réponse correcte à la question 3
        q4: "a",  // Réponse correcte à la question 4
        q5: "b",  // Réponse correcte à la question 5
        q6: "a",  // Réponse correcte à la question 6
        q7: "a",  // Réponse correcte à la question 7
        q8: "a"   // Réponse correcte à la question 8
    };

    let userAnswers = new FormData(event.target); 
    let score = 0;
    let totalQuestions = Object.keys(correctAnswers).length;
    let resultMessage = "Voici vos résultats :<br><br>";

    // Vérifier les réponses
    for (let question in correctAnswers) {
        let userAnswer = userAnswers.get(question);
        let correctAnswer = correctAnswers[question];
        
        if (userAnswer === correctAnswer) {
            score++;
            resultMessage += `<span class="feedback correct">Question ${question.slice(1)}: Correct!</span><br>`;
        } else {
            resultMessage += `<span class="feedback incorrect">Question ${question.slice(1)}: Incorrect</span><br>`;
        }
    }

    resultMessage += `<br><strong>Score final: ${score} / ${totalQuestions}</strong>`;

    // Afficher le feedback
    feedback.innerHTML = resultMessage;
    feedback.style.display = "block";
    if(score===8){
        alert("Bravo, vous avez gagné le droit d'acceder à Baleine-Land !");
        window.location.href = "calendrier/calendrier.html";
    }
});


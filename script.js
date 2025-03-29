const albumButtons = document.querySelectorAll(".album-btn");
const messageBox = document.getElementById("message");

const messages = {
    lover: "Eres mi destino, mi felicidad y mi persona favorita. 💕 Siempre seré tu ‘Lover’ 🎶",
    red: "Te amo con la intensidad del rojo, apasionado e inolvidable. ❤️ ‘Loving him was Red’ 🎶",
    speaknow: "Nuestro amor es como un cuento de hadas. Sé valiente y dilo: ‘I love you’. 💜🎶"
};

// Evento para cambiar el mensaje según el álbum elegido
albumButtons.forEach(button => {
    button.addEventListener("click", () => {
        const selectedAlbum = button.getAttribute("data-album");
        messageBox.textContent = messages[selectedAlbum];

        // Cambio de colores según el álbum
        const cardFront = document.querySelector(".card-front");
        const cardBack = document.querySelector(".card-back");

        if (selectedAlbum === "lover") {
            cardFront.style.backgroundColor = "#ffb6c1";  // Rosa pastel
            cardBack.style.backgroundColor = "#ff69b4";  // Fucsia
        } else if (selectedAlbum === "red") {
            cardFront.style.backgroundColor = "#ff6347";  // Rojo coral
            cardBack.style.backgroundColor = "#8b0000";  // Rojo oscuro
        } else if (selectedAlbum === "speaknow") {
            cardFront.style.backgroundColor = "#dda0dd";  // Lavanda
            cardBack.style.backgroundColor = "#800080";  // Púrpura intenso
        }
    });
});

const specialFilm = document.getElementById("special-film");
const introVideo = document.getElementById("introVideo");

// Quand on clique sur l'image spéciale
specialFilm.addEventListener("click", () => {
  introVideo.classList.remove("hidden");
  introVideo.play();

  // Quand la vidéo se termine
  introVideo.addEventListener("ended", () => {
    // On redirige vers l’image finale
    window.location.href = "demande.jpg";
  });
});

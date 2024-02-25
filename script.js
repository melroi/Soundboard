function toggleFavorite(soundId) {
  var favoriteCheckbox = document.getElementById("favorite-" + soundId);
  if (favoriteCheckbox.checked) {
    // Supprimer des favoris
    favoriteCheckbox.checked = false;
    // Code pour supprimer soundId des favoris de l'utilisateur
  } else {
    // Ajouter aux favoris
    favoriteCheckbox.checked = true;
    // Code pour ajouter soundId aux favoris de l'utilisateur
  }
}

function playSound(soundFile) {
  var audio = new Audio(soundFile);
  audio.play();
}

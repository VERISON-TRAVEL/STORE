// Animation d’apparition douce au chargement
document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = "opacity 1.5s ease-in-out";
    document.body.style.opacity = 1;
  }, 100);
});

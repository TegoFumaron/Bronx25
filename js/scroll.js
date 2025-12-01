const hero = document.getElementById("hero");
const heroText = document.getElementById("hero-text");

window.addEventListener("scroll", () => {

  const heroBottom = hero.getBoundingClientRect().bottom;

  // 1. Si el texto llega arriba, se queda fijo
  if (heroBottom <= window.innerHeight / 2) {
    heroText.classList.add("sticky");
  } else {
    heroText.classList.remove("sticky");
  }

  // 2. Si la imagen se va completamente → desaparecer texto
  if (heroBottom <= 0) {
    heroText.classList.add("fade-out");
  } else {
    heroText.classList.remove("fade-out");
  }

});

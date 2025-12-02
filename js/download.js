const downloadBtn = document.getElementById("download-btn");
const modal = document.getElementById("download-modal");
const fill = document.querySelector(".progress-fill");
const progressText = document.getElementById("progress-text");

downloadBtn.addEventListener("click", () => {

  if (downloadBtn.classList.contains("disabled")) return;

  // MOSTRAR MODAL
  modal.classList.remove("hidden");
  fill.style.width = "0%";
  progressText.textContent = "0%";

  // INICIAR DESCARGA EN SEGUNDO PLANO (DESCARGA DIRECTA GITHUB)
  window.open("https://github.com/TegoFumaron/Bronx25/releases/download/v1.7/BRONX25v1x7.zip", "_blank");

  // PROGRESO SIMULADO (realista)
  let progress = 0;
  const interval = setInterval(() => {

    progress += Math.random() * 8; // carga con variaciones

    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);

      // CERRAR MODAL
      setTimeout(() => {
        modal.classList.add("hidden");
        downloadBtn.textContent = "Descargado :)";
      }, 400);
    }

    fill.style.width = progress + "%";
    progressText.textContent = Math.floor(progress) + "%";

  }, 200);
});

const captchaCheck = document.getElementById("captcha-check");
const downloadBtn = document.getElementById("download-btn");

captchaCheck.addEventListener("change", () => {
  if (captchaCheck.checked) {
    downloadBtn.classList.remove("disabled");
  } else {
    downloadBtn.classList.add("disabled");
  }
});

// Cantidad actual donada (la actualizáis a mano cuando queráis)
let donado = 0.00;

// Meta mensual
const meta = 23.50;

// % calculado
let porcentaje = (donado / meta) * 100;
if (porcentaje > 100) porcentaje = 100;

// Rellenar barra
document.getElementById("meta-fill").style.width = porcentaje + "%";

// Texto
document.getElementById("meta-text").textContent =
  donado.toFixed(2) + " € recaudados / " + meta.toFixed(2) + " €";

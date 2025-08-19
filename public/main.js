
// Funciones de conversión y media móvil (autónomas para el navegador)
function toCelsius(f) {
  if (!Number.isFinite(f)) throw new TypeError('El valor debe ser un número finito');
  return Math.round(((f - 32) * 5 / 9) * 10) / 10;
}
function toFahrenheit(c) {
  if (!Number.isFinite(c)) throw new TypeError('El valor debe ser un número finito');
  return Math.round(((c * 9 / 5) + 32) * 10) / 10;
}
function movingAverage(series, window) {
  if (!Array.isArray(series) || !series.every(Number.isFinite)) {
    throw new TypeError('Todos los valores deben ser números finitos');
  }
  if (!Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('La ventana debe ser un entero >= 2 y <= series.length');
  }
  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const slice = series.slice(i, i + window);
    const avg = slice.reduce((a, b) => a + b, 0) / window;
    result.push(Number(avg.toFixed(2)));
  }
  return result;
}


window.addEventListener('DOMContentLoaded', () => {
  // Conversión de temperaturas
  const tempForm = document.getElementById('temp-form');
  const tempResult = document.getElementById('temp-result');
  tempForm.addEventListener('submit', e => {
    e.preventDefault();
    const value = parseFloat(document.getElementById('temp-value').value);
    const type = document.getElementById('temp-type').value;
    try {
      let result;
      if (type === 'c2f') {
        result = `${value}°C = ${toFahrenheit(value)}°F`;
      } else {
        result = `${value}°F = ${toCelsius(value)}°C`;
      }
      tempResult.textContent = result;
    } catch (err) {
      tempResult.textContent = err.message;
    }
  });

  // Media móvil
  const avgForm = document.getElementById('avg-form');
  const avgResult = document.getElementById('avg-result');
  avgForm.addEventListener('submit', e => {
    e.preventDefault();
    const series = document.getElementById('avg-series').value.split(',').map(Number);
    const windowSize = parseInt(document.getElementById('avg-window').value);
    try {
      const result = movingAverage(series, windowSize);
      avgResult.textContent = `Resultado: [${result.join(', ')}]`;
    } catch (err) {
      avgResult.textContent = err.message;
    }
  });
});

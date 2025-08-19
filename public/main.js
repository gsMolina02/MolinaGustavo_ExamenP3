import { toCelsius, toFahrenheit } from '../src/utils/conversions.js';
import movingAverage from '../src/utils/movingAverage.js';

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

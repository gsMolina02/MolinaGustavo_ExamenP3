// Funciones de conversión de temperatura
function toCelsius(f) {
    if (!Number.isFinite(f)) throw new TypeError('El valor debe ser un número finito');
    return Math.round(((f - 32) * 5 / 9) * 10) / 10;
}

function toFahrenheit(c) {
    if (!Number.isFinite(c)) throw new TypeError('El valor debe ser un número finito');
    return Math.round(((c * 9 / 5) + 32) * 10) / 10;
}

module.exports = { toCelsius, toFahrenheit };

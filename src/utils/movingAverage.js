// Media móvil simple
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

module.exports = movingAverage;

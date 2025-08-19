function toCelsius(f) {
  if (typeof f !== 'number' || !isFinite(f)) {
    throw new TypeError('La temperatura debe ser un número finito');
  }
  const celsius = (f - 32) * 5/9;
  return parseFloat(celsius.toFixed(1)); // Redondear a 1 decimal como esperan los tests
}

function toFahrenheit(c) {
  if (typeof c !== 'number' || !isFinite(c)) {
    throw new TypeError('La temperatura debe ser un número finito');
  }
  const fahrenheit = (c * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1)); // Redondear a 1 decimal
}

function movingAverage(series, window) {
  if (!Array.isArray(series) || series.some(item => typeof item !== 'number' || !isFinite(item))) {
    throw new TypeError('La serie debe contener solo números finitos');
  }
  
  if (typeof window !== 'number' || !Number.isInteger(window) || window < 2 || window > series.length) {
    throw new RangeError('La ventana debe ser un entero entre 2 y la longitud de la serie');
  }
  
  const result = [];
  for (let i = 0; i <= series.length - window; i++) {
    const windowValues = series.slice(i, i + window);
    const sum = windowValues.reduce((acc, val) => acc + val, 0);
    const average = sum / window;
    result.push(parseFloat(average.toFixed(2))); // Redondear a 2 decimales como esperan los tests
  }
  
  return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };
export function toCelsius(f) {
  if (typeof f !== 'number' || !isFinite(f)) {
    throw new TypeError('La temperatura debe ser un número finito');
  }
  const celsius = (f - 32) * 5/9;
  return Math.round(celsius * 10) / 10;
}

export function toFahrenheit(c) {
  if (typeof c !== 'number' || !isFinite(c)) {
    throw new TypeError('La temperatura debe ser un número finito');
  }
  const fahrenheit = (c * 9/5) + 32;
  return Math.round(fahrenheit * 10) / 10;
}

export function movingAverage(series, window) {
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
    result.push(Math.round(average * 100) / 100);
  }
  
  return result;
}

module.exports = { toCelsius, toFahrenheit, movingAverage };

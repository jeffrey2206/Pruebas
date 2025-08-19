import { toCelsius, toFahrenheit, movingAverage } from '../Lab2-3P/Celsius';

describe('toCelsius', () => {
  test('convierte 32°F a 0.0°C', () => {
    expect(toCelsius(32)).toBe(0.0);
  });

  test('convierte 212°F a 100.0°C', () => {
    expect(toCelsius(212)).toBe(100.0);
  });

  test('convierte -40°F a -40.0°C', () => {
    expect(toCelsius(-40)).toBe(-40.0);
  });

  test('lanza TypeError para entrada no numérica', () => {
    expect(() => toCelsius('32')).toThrow(TypeError);
  });

  test('lanza TypeError para Infinity', () => {
    expect(() => toCelsius(Infinity)).toThrow(TypeError);
  });
});

describe('toFahrenheit', () => {
  test('convierte 0°C a 32.0°F', () => {
    expect(toFahrenheit(0)).toBe(32.0);
  });

  test('convierte 100°C a 212.0°F', () => {
    expect(toFahrenheit(100)).toBe(212.0);
  });

  test('convierte -40°C a -40.0°F', () => {
    expect(toFahrenheit(-40)).toBe(-40.0);
  });

  test('lanza TypeError para entrada no numérica', () => {
    expect(() => toFahrenheit('0')).toThrow(TypeError);
  });
});

describe('movingAverage', () => {
  test('calcula correctamente la media móvil con ventana 2', () => {
    expect(movingAverage([10, 20, 30, 40], 2)).toEqual([15.00, 25.00, 35.00]);
  });

  test('calcula correctamente la media móvil con ventana 3', () => {
    expect(movingAverage([1, 2, 3], 3)).toEqual([2.00]);
  });

  test('lanza TypeError para serie con valores no numéricos', () => {
    expect(() => movingAverage([10, '20', 30], 2)).toThrow(TypeError);
  });

  test('lanza RangeError para ventana menor a 2', () => {
    expect(() => movingAverage([10, 20, 30], 1)).toThrow(RangeError);
  });

  test('lanza RangeError para ventana mayor a la longitud de la serie', () => {
    expect(() => movingAverage([10, 20, 30], 4)).toThrow(RangeError);
  });
});
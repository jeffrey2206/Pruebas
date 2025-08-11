// math.js
// Función para calcular el factorial de un número
function factorial(n) {
    if (n < 0) throw new Error('No existe el factorial de un número negativo');
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

// Función para calcular el n-ésimo número de Fibonacci
function fibonacci(n) {
    if (n < 0) throw new Error('No existe fibonacci para números negativos');
    if (n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = { factorial, fibonacci };

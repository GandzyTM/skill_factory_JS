const celsius = [-15, -5, 0, 10, 16, 20, 24, 32];

const rate = value => value * 1.8 + 32;

const fahrenheit = celsius.forEach(t => rate(t));
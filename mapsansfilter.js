//primer ejercicio 
const arreglo = [1, 2, 3, 4];
const nuevoArray = arreglo.map(num => num * 3);
console.log(nuevoArray);

//segundo ejercicio
const aregloNum = [10, -5, 20, -15, 30];
const numerosNegativos = aregloNum.filter(num => num < 0);
console.log(numerosNegativos);

//tercer ejercicio
const arregloString = ["sol", "montaña", "luz", "elefante"];
const palabrasLargas = arregloString.filter(palabra => palabra.length > 5);
console.log(palabrasLargas);

//cuarto ejercicio
(function () {
    const numero = 7;
    const esImpar = numero % 2 !== 0;
    console.log(`¿El número ${numero} es impar? ${esImpar}`);
})();

//quinto ejercicio
const numeros = [1, 2, 3, 4, 5, 6];

const resultadoFinal = numeros
    .filter(num => num > 3)
    .map(num => num * 2);

console.log(resultadoFinal);
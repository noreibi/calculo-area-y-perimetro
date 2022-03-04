//Codigo cuadrado

console.group("Cuadrados");

//primera forma de arrojar resultados

function perimetroCuadrado(lado) {
  return lado * 4;
}
const resultado1 = perimetroCuadrado(4);
console.log("el resultado es", resultado1);

//segunda forma de arrojar resultados

function areaCuadrado(lado) {
  return lado * lado;
}

console.log(areaCuadrado(6));

//console.groupEnd();

//-----------------------------------------------------------//
// Codigo triangulo
function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
const resultadoPer = perimetroTriangulo(6, 6, 4);
console.log("el resultado del perimetro es", resultadoPer);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

const resultadoArea = areaTriangulo(6, 6);
console.log("el resultado del area es", resultadoArea);

// Codigo Circulo

//Diámetro

function diametroCirculo(radio) {
  return radio * 12;
}

const resultadoCirculo = diametroCirculo(6);
console.log("el resultado del circulo es", resultadoCirculo);

const PI = Math.PI;
console.log("PI es: " + PI);

//Circunferencia-- En este caso colocamos una función dentro de otra función

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

const resultadoPerimetral = perimetroCirculo(6);
console.log("el resultado perimetral es", resultadoPerimetral);

// Área

function areaCirculo(radio) {
  return radio * radio * PI;
}
const resultadoFigura = areaCirculo(6);
console.log("el resultado area circular es", resultadoFigura);

console.groupEnd();

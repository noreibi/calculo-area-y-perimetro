//Codigo cuadrado

console.group("Cuadrados");

//primera forma de arrojar resultados

function perimetroCuadrado(lado) {
  return lado * 4;
}
/* const resultado1 = perimetroCuadrado(4);
console.log("el resultado es", resultado1); */

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
// const resultadoPer = perimetroTriangulo(6, 6, 4);
// console.log("el resultado del perimetro es", resultadoPer);

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

// const resultadoArea = areaTriangulo(6, 6);
// console.log("el resultado del area es", resultadoArea);

// // Codigo Circulo

//Diámetro

function diametroCirculo(radio) {
  return radio * 12;
}

// const resultadoCirculo = diametroCirculo(6);
// console.log("el resultado del circulo es", resultadoCirculo);

// const PI = Math.PI;
// console.log("PI es: " + PI);

//Circunferencia-- En este caso colocamos una función dentro de otra función

function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// const resultadoPerimetral = perimetroCirculo(6);
// console.log("el resultado perimetral es", resultadoPerimetral);

// Área

function areaCirculo(radio) {
  return radio * radio * PI;
}
// const resultadoFigura = areaCirculo(6);
// console.log("el resultado area circular es", resultadoFigura);

// console.groupEnd();

// Aquí interactuamos con el HTML

//cuadrado
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadradoArea");
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

//triangulo
function calcularPerimetroTriangulo() {
  const inputLado1 = document.getElementById("lado1Triangulo");
  const inputLado2 = document.getElementById("lado2Triangulo");
  const inputBase = document.getElementById("baseTriangulo");

  const lado1 = parseInt(inputLado1.value);
  const lado2 = parseInt(inputLado2.value);
  const base = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const inputAltura = document.getElementById("alturaTriangulo");
  const inputBase = document.getElementById("baseTriangulo2");

  const base = inputBase.value;
  const altura = inputAltura.value;

  const area = areaTriangulo(base, altura);
  alert(area);
}

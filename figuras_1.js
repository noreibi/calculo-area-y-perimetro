//Codigo cuadrado

console.group("Cuadrados");

const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El perímetro del cuadrado es: " + areaCuadrado + "cm^2 ");

console.groupEnd();

//Codigo Triangulo

console.group("Triangulos");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo3 = 4;
//const alturaTriangulo3 = 5.5;
console.log(
  "Los lados del triángulo miden: " +
    ladoTriangulo1 +
    "cm, " +
    ladoTriangulo2 +
    "cm, " +
    baseTriangulo3 +
    "cm, "
);

const alturaTriangulo3 = 5.5;
console.log("La altura del triángulo miden: " + alturaTriangulo3 + "cm");

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
console.log("El perímetro del Triángulo es: " + perimetroTriangulo + "cm");

const areaTriangulo = (baseTriangulo3 * alturaTriangulo3) / 2;
console.log("El área del Triángulo es: " + areaTriangulo + "cm");

console.groupEnd();

//Codigo Circulo

console.group("Circulo");

//Radio
const radioCirculo = 4;
console.log("El radio del circulo miden: " + radioCirculo + "cm");
//Diámetro
const diametroCirculo = radioCirculo * 2;
console.log("El Diámetro del circulo miden: " + diametroCirculo + "cm");
//PI
const PI = Math.PI;
console.log("PI es: " + PI);
//Circunferencia
const perimetroCirculo = diametroCirculo * 2;
console.log("El Perímetro del circulo miden: " + perimetroCirculo + "cm");
//PI
//Área
const areaCirculo = radioCirculo * radioCirculo * PI;
console.log("El Área del circulo miden: " + areaCirculo + "cm^2");

console.groupEnd();

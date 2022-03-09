function perimetroTriangulo(ladoA, base) {
  return 2 * ladoA + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function alturaTriangulo(ladoA, ladoBase) {
  //return Math.sqrt(ladoA) + ladoBase;
  return Math.sqrt(ladoA ** 2 - ladoBase ** 2 / 4);
}

function calcularPerimetroIsosceles() {
  //recuperar los datos: lo que quiere comer
  const inputladoA = document.getElementById("ladoATrianguloPerimetro");
  const inputBase = document.getElementById("baseTrianguloPerimetro");
  const ladoA = parseInt(inputladoA.value);
  const ladoBase = parseInt(inputBase.value);
  //validar los datos:
  const resultadoValidacion = validarDatos(ladoA, ladoBase);
  if (resultadoValidacion.error) {
    alert(resultadoValidacion.mensaje);
    return;
  }
  //calcular o solicitarselos al modelo
  const perimetro = perimetroTriangulo(ladoA, ladoBase);
  //imprimir
  alert(perimetro);
}

function calcularAreaIsosceles() {
  const inputAltura = document.getElementById("alturaTrianguloArea");
  const inputBase = document.getElementById("baseTrianguloArea");

  const altura = inputAltura.value;
  const base = inputBase.value;

  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularAlturaIsosceles() {
  const inputladoA = document.getElementById("ladoATrianguloAltura");
  const inputladoBase = document.getElementById("baseTrianguloAltura");

  const altura = alturaTriangulo(inputladoA.value, inputladoBase.value);
  alert(altura);
}

function validarDatos(ladoA, base) {
  if (!ladoA) return { error: true, mensaje: "El lado A no esta definido" };
  if (!base) return { error: true, mensaje: "Necesitas escribir la base" };
  if (ladoA < 1)
    return {
      error: true,
      mensaje: "Los lados del triangulo deben ser mayores a cero",
    };
  if (base < 1)
    return {
      error: true,
      mensaje: "La base debe ser mayor a cero",
    };
  if (!parseInt(ladoA) || !parseInt(base))
    return { error: true, mensaje: "por favor introduzca un numero valido" };

  return { error: false, mensaje: "no hubo errores" };
}

console.log(typeof 4);
console.log(typeof "hola");
console.log(typeof { nombre: "Ali" });
console.log(typeof []);

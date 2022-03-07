function perimetroTriangulo(ladoA, ladoB, base) {
  return ladoA + ladoB + base;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}

function alturaTriangulo(ladoA, ladoBase) {
  return Math.sqrt(ladoA) + ladoBase;
}

function calcularPerimetroIsosceles() {
  const inputladoA = document.getElementById("ladoATriangulo");
  const inputladoB = document.getElementById("ladoBTriangulo");
  const inputBase = document.getElementById("baseTriangulo");

  const ladoA = parseInt(inputladoA.value);
  const ladoB = parseInt(inputladoB.value);
  const ladoBase = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(ladoA, ladoB, ladoBase);
  alert(perimetro);
}

function calcularAreaIsosceles() {
  const inputAltura = document.getElementById("alturaTriangulo");
  const inputBase = document.getElementById("baseTriangulo2");

  const base = inputBase.value;
  const altura = inputAltura.value;

  const area = areaTriangulo(base, altura);
  alert(area);
}

function calcularAlturaIsosceles() {
  const input = document.getElementById("InputIsoscelesAltura");
  const inputladoA = document.getElementById("ladoATriangulo");
  const inputladoB = document.getElementById("ladoBTriangulo");
  const inputladoBase = document.getElementById("baseTriangulo");

  const altura = alturaTriangulo(ladoA.value, ladoB.value, ladoBase.value);
  alert(altura);
}

// codigo de un estudiante
function altura(lado1, lado2, base) {
  if (lado1 === lado2 && lado1 != base) {
    alert("isoceles");
    const altura = Math.sqrt(lado1 ** 2 - base ** 2 / 4);
    console.log(altura);
  } else {
    alert("no lo se");
  }
}
altura(6, 6, 4);

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
  const inputladoA = document.getElementById("ladoATrianguloPerimetro");
  const inputBase = document.getElementById("baseTrianguloPerimetro");

  const ladoA = parseInt(inputladoA.value);
  const ladoBase = parseInt(inputBase.value);

  const perimetro = perimetroTriangulo(ladoA, ladoBase);
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

const number = 'Digite um número para calcular a tabuada (de 1 a 20)'

if (number >= 1 && number <= 20) {
  let multiplicationTableResult = ""; 

  for (let i = 1; i <= 20; i++) {
    const resultado = number * i;
    multiplicationTableResult += `${number} x ${i} = ${resultado}\n`;
  }

  console.log("Tabuada do número", number, ":\n", multiplicationTableResult);
} else {
  console.log("Número fora do intervalo válido (de 1 a 20).");
}

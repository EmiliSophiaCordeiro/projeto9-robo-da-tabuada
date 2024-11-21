// Solicitar o número ao usuário
let number = parseInt(prompt("Digite um número para calcular a tabuada (de 1 a 20):"));

// Verificar se o número está dentro do intervalo válido
if (number >= 1 && number <= 20) {
  let multiplicationTableResult = ""; 

  // Calcular a tabuada
  for (let i = 1; i <= 10; i++) { // Calculando até 10 vezes (tabuada usual)
    const resultado = number * i;
    multiplicationTableResult += `${number} x ${i} = ${resultado}\n`;
  }

  // Exibir a tabuada
  alert(`Tabuada do número ${number}:\n${multiplicationTableResult}`);
} else {
  // Caso o número não esteja no intervalo
  alert("Número fora do intervalo válido (de 1 a 20).");
}

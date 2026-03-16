// index.js
/* Implemente um simulador de Máquina de Turing capaz de verificar se um candidato
possui equilíbrio entre suas habilidades.
A entrada será uma sequência contendo:
T = Taijutsu
N = Ninjutsu
G = Genjutsu
A máquina deve aceitar apenas se houver a mesma quantidade de T, N e G.
A Máquina de Turing deve reconhecer cadeias da forma:
Tⁿ Nⁿ Gⁿ
onde:
5 ≥ n ≥ 1
Exemplos aceitos
TNG
TTNNGG
TTTNNNGGG
*/
function turingMachine(input) {
  let tape = input.split("");
  let i;

  if (tape.length < 3 || tape.length > 15) return false;

  while (true) {
    i = tape.findIndex((c) => c === "T");

    if (i === -1) break;

    tape[i] = "X";

    let foundN = false;
    for (let j = i + 1; j < tape.length; j++) {
      if (tape[j] === "N") {
        tape[j] = "Y";
        foundN = true;
        break;
      }
    }

    if (!foundN) return false;

    let foundG = false;
    for (let j = i + 1; j < tape.length; j++) {
      if (tape[j] === "G") {
        tape[j] = "Z";
        foundG = true;
        break;
      }
    }

    if (!foundG) return false;
  }
  for (let c of tape) {
    if (c === "T" || c === "N" || c === "G") {
      return false;
    }
  }

  return true;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Digite a sequência (T,N,G): ", (input) => {
  if (turingMachine(input.toUpperCase())) {
    console.log("Aceito");
  } else {
    console.log("Rejeitado");
  }

  readline.close();
});
("");

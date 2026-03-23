// atividade afnd
// desenvolver um aplicativo no qual o prof. carvalho precisa mapiar os elementos compativel com as evolucoes dos pokemon
// sua aplicacao deve receber os sequintes possiveis,
// t-terra, f-fantasma, a-agua, e-eletrico, p-psiquico, f-fogo, v-voador, g-grama dragon,
// regras
// 5 input de elementos ex te|fa|AG|Vo|gr
// elemento tipo agua nao pode evoluir com tipo eletrico
// voador so pode evoluir para tipo dragon,
// fogo so pode evoluir para voador ou dragon
//fratasma nao pode evoluir para o tipo psiquico

function pokemonEvolution(input) {
  const elements = input.split("|").map(e => e.toLowerCase());

  if (elements.length !== 2) return false;

  const set = new Set(elements);

  for (const element of elements) {
    switch (element) {
      case "a":
        if (set.has("e")) return false;
        break;

      case "v":
        if (!set.has("d")) return false;
        break;

      case "fo":
        if (!set.has("v") && !set.has("d")) return false;
        break;

      case "fa":
        if (set.has("p")) return false;
        break;
    }
  }

  return true;
}

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("informar os elementos: ", (input) => {
  if (pokemonEvolution(input.toUpperCase())) {
    console.log("Aceito");
  } else {
    console.log("Rejeitado");
  }

  readline.close();
});


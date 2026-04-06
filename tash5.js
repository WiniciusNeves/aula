function identifyJutsu(input) {
  const seals = input.split(",").map(s => s.trim().toLowerCase());

  const allowedSeals = [
    "cobra",
    "cabra",
    "dragao",
    "coelho",
    "cavalo",
    "passaro",
    "cachorro",
    "tigre",
    "carneiro",
    "javali",
    "rato",
    "boi",
    "macaco"
  ];

  if (seals.length < 4 || seals.length > 13) return false;
  if (seals[0] !== "cobra") return false;
  if (seals[seals.length - 1] !== "macaco") return false;

  const dp = Array(seals.length).fill(null).map(() => new Set());
  dp[0].add(seals[0]);

  for (let i = 1; i < seals.length; i++) {
    const seal = seals[i];

    if (!allowedSeals.includes(seal)) return false;

    for (const used of dp[i - 1]) {
      if (!dp[i].has(seal) && ![...dp[i - 1]].includes(seal)) {
        dp[i] = new Set([...dp[i - 1], seal]);
      }
    }
  }

  const finalState = dp[seals.length - 1];

  return finalState.size === seals.length;
}

module.exports = identifyJutsu;

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  `Informe os selos separados por vírgula:\n` +
  `cobra,cabra,dragao,coelho,cavalo,passaro,cachorro,tigre,carneiro,javali,rato,boi,macaco\n`,
  (input) => {
    if (identifyJutsu(input)) {
      console.log("Aceito");
    } else {
      console.log("Rejeitado");
    }

    readline.close();
  }
);
const prompt = require("prompt-sync")();
let filmes = [];

for (let i = 1; i <= 5; i++) {
  let filme = prompt(`Digite o nome do ${i}° Filme: `)
  filmes.push(filme);
}
for (let i = 0; i < filmes.length; i++) {
  console.log("Filme: " + filmes[i], "\n");
}

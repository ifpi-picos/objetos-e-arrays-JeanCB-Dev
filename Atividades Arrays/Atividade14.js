/*Implemente uma função que recebe um título de filme como parâmetro
e busca na lista de filmes do exercício 1. A função deve retornar uma
mensagem informando se o filme foi encontrado ou não na lista. Exiba
o resultado da busca no console.*/
const filmes = [
  "The Witcher",
  "Harry Potter",
  "Senhor dos Aneis",
  "Interestelar",
  "Gente Grande",
];

function procuraFilme(titulo) {
  for (let i = 0; i <= filmes.length; i++) {
    if (titulo === filmes[i]) {
      console.log("o filme está na lista!!");
      break;
    }
    if (i == filmes.length) {
      if (titulo !== filmes[i]) {
        console.log("o filme não está na lista!");
      }
    }
  }
}
procuraFilme("Interestelar");

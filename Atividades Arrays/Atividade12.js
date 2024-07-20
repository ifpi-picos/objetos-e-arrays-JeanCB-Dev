const filmes = [
  { filme: "The Witcher", anoDeCriacao: 1993 },
  { filme: "Harry Potter", anoDeCriacao: 1998 },
  { filme: "Senhor dos Aneis", anoDeCriacao: 1954 },
  { filme: "Interestelar", anoDeCriacao: 2014 },
  { filme: "Gente Grande", anoDeCriacao: 2010 },
];

function retornaFilme(value) {
  if (value.anoDeCriacao > 2000) return value;
}

let filmesSelec = filmes.filter(retornaFilme);
filmesSelec.forEach((anoCriacao2000) => {
  console.log(anoCriacao2000);
});

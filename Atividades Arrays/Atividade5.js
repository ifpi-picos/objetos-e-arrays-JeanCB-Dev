const nome = "Jean Carlos Moura Martins";
let numeros = 0;
for (let i = 0; i < nome.length; i++) {
  if (nome[i] == " ") {
  } else {
    numeros += 1;
  }
}
console.log(`Numero de Caracteres: ${numeros}`);

function Pessoa(nome) {
  let pessoa = [];
  let ultimo = 0;
  pessoa = nome.split(' ');
  for (let i = 0; i < pessoa.length; i++) {
    ultimo = i;
    }
    console.log(`Primeiro nome: ${pessoa[0]}\nÚltimo nome: ${pessoa[ultimo]}`);
}

Pessoa('Jean Carlos Moura Martins')

const fs = require('fs');
const animais = require('/home/alex/aula_DH/Aulas/exercicioAnimal/jsons/animais.json');
const lista = [];

module.exports.adicionar = (req, res) => {
    const animal = {
      id: Math.round(Math.random() * 1000 + 1),
      nome: req.query.nome,
    };
    animais.push(animal);
    fs.writeFileSync(
      '../jsons/animais.json',
      //'/home/alexfurlan/aula_DH/Aulas/exercicioAnimal/jsons/animais.json'
      JSON.stringify(animais),
      (e) => {
        console.log('deu errado');
      }
    );
    res.send(`O animal ${animal.nome} foi criado com sucesso!`)
}

module.exports.listar = (req, res) => {
  fs.readFileSync(
  '../jsons/animais.json',
  JSON.parse(animais),
  );
  for (let i = 0; i < animais.length; i++) {
    lista = 'nome: ' + animais[i].nome + '\nid: ' + animais[i].id + '\n--------------------'
  }

  res.send(lista)
}

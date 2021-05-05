const fs = require('fs');
const animais = require('../jsons/animais.json');
const path = require('path');
var lista = '';
console.log(animais)

module.exports.adicionar = (req, res) => {
    const animal = {
      id: Math.round(Math.random() * 1000 + 1),
      nome: req.query.nome,
    };
    animais.push(animal);
    fs.writeFileSync(
      //'../jsons/animais.json',
      //'/home/alexfurlan/aula_DH/Aulas/exercicioAnimal/jsons/animais.json',
      path.resolve('..', 'execicioAnimal', 'jsons', 'animais.json'),
      JSON.stringify(animais),
      (e) => {
        console.log('deu errado');
      }
    );
    res.send(`O animal ${animal.nome} foi criado com sucesso!`)
}

module.exports.listar = (req, res) => {
//  fs.readFileSync(
//  '../jsons/animais.json',
//    const obj = JSON.parse(animais)
//  );
  for (let i = 0; i < animais.length; i++) {
    lista = 'ID: ' + animais[i].id + '<br>Nome: ' + animais[i].nome + '<br>--------------------'
    console.log(lista);
  }

  res.send(lista)
}

module.exports.atualizar = (req, res) => {
  const animal = {
    id: Math.round(Math.random() * 1000 + 1),
    nome: req.query.nome,
  };
  animais.push(animal);
  fs.writeFileSync(
//    '../jsons/animais.json',
//    '/home/alexfurlan/aula_DH/Aulas/exercicioAnimal/jsons/animais.json',
    path.resolve('..', 'execicioAnimal', 'jsons', 'animais.json'),
    JSON.stringify(animais),
    (e) => {
      console.log('deu errado');
    }
  );
  res.send(`O animal ${animal.nome} foi atualizado com sucesso!`)
}

module.exports.deletar = (req, res) => {
  const animal = {
    id: Math.round(Math.random() * 1000 + 1),
    nome: req.query.nome,
  };
  animais.push(animal);
  fs.writeFileSync(
    '../jsons/animais.json',
//    '/home/alexfurlan/aula_DH/Aulas/exercicioAnimal/jsons/animais.json',
//    path.resolve('..', 'execicioAnimal', 'jsons', 'animais.json'),
    JSON.stringify(animais),
    (e) => {
      console.log('deu errado');
    }
  );
  res.send(`O animal ${animal.nome} foi deletado com sucesso!`)
}


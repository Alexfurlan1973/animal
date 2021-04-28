const express = require('express') // Carregou a lib
const app = express() // Criou o servidor

const animalController = require('./controllers/animalController')

app.get('/adicionar', animalController.adicionar)
app.get('/listar', animalController.listar)


app.listen(8080, () => {
    console.log('listening')
})

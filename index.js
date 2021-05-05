const express = require('express') // Carregou a lib
const app = express() // Criou o servidor

const animalController = require('./controllers/animalController')

app.post('/adicionar', animalController.adicionar)
app.get('/listar', animalController.listar)
app.put('/atualizar/:id', animalController.atualizar)
app.delete('/deletar/:id', animalController.deletar)


app.listen(8080, () => {
    console.log('listening')
})

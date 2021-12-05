const express = require('express');
const cors = require('cors');

const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const tarefas = [];

app.post('/tarefas', (request, response) => {
  const{nome, concluido} = request.body;

  const tarefa = {
    id: uuidv4(),
    nome,
    concluido,
  };

  tarefas.push(tarefa);

  return response.status(201).json(tarefa);
});

app.get('/', (request, response) => {
  
});

app.post('/', (request, response) => {
  
});

app.put('/',(request, response) => {
  
});

app.patch('/',(request, response) => {
  
});

app.delete('/', (request, response) => {
  
});

module.exports = app;

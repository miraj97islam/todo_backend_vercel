const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

// app.use(cors({
//   origin: 'https://todo-frontend-vercel-two.vercel.app',
//   // methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true
// }));

app.use(express.json());

const {
 getTodos,
 deleteTodo,
 createTodo,
 updateTodo,
 getTodo
} = require('./controllers/todoController');


app.get('/todos', getTodos);
app.get('/todos/:id', getTodo);
app.post('/todos', createTodo);
app.put('/todos/:id', updateTodo);
app.delete('/todos/:id', deleteTodo);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
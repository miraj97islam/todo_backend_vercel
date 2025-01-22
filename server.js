<<<<<<< Updated upstream
const http = require('http');
const cors = require('cors');
=======
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
>>>>>>> Stashed changes

const {
 getTodos,
 deleteTodo,
 createTodo,
 updateTodo,
 getTodo
} = require('./controllers/todoController');


<<<<<<< Updated upstream
  // res.setHeader('Access-Control-Allow-Headers', req.header.origin);

  cors({
    origin: '*', // Allow only this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'] // Allowed HTTP methods
  })(req, res, () => {
    // Handle OPTIONS preflight request
    if (req.method === 'OPTIONS') {
      return res.status(204).end(); // Respond with status 204 (No Content)
    }
  })


  // const handleCors = (res) => {
  //   res.setHeader('Access-Control-Allow-Credentials', true);
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS, PATCH, DELETE, POST, PUT');
  //   res.setHeader(
  //     'Access-Control-Allow-Headers',
  //     'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  //   );
  // };
  
  // const server = http.createServer((req, res) => {
  
  //   // Handle OPTIONS preflight request
  //   if (req.method === 'OPTIONS') {
  //     handleCors(res);
  //     return res.status(204).end(); // Respond with status 204 (No Content)
  //   }
  
  //   handleCors(res);



  if (req.url === '/todos' && req.method === 'GET') {
    getTodos(req, res);
  }else if (req.url.match(/\/todos\/\w+/) && req.method === 'GET') {
    const id = req.url.split('/')[2];
    getTodo(req, res, id);
  }else if (req.url === '/todos' && req.method === 'POST') {
    createTodo(req, res);
  }else if (req.url.match(/\/todos\/\w+/) && req.method === 'PUT') {
    const id = req.url.split('/')[2];
    updateTodo(req, res, id);
   } else if (req.url.match(/\/todos\/\w+/) && req.method === 'DELETE') {
    const id = req.url.split('/')[2];
    deleteTodo(req, res, id);
  }else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(
      JSON.stringify({
        message: 'Route Not Found: Please use the /todos endpoint',
      })
    );
  }
})


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//  module.exports = server;
=======
app.get('/todos', getTodos);
app.get('/todos/:id', getTodo);
app.post('/todos', createTodo);
app.put('/todos/:id', updateTodo);
app.delete('/todos/:id', deleteTodo);


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

module.exports = app;
>>>>>>> Stashed changes

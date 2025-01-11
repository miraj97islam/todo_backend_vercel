const http = require('http');

const {
 getTodos,
 deleteTodo,
 createTodo,
 updateTodo,
 getTodo
} = require('./controllers/todoController');

const server = http.createServer((req, res) =>{

  if (req.method === 'OPTIONS') {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
    return res.status(204).end();  // Respond with status 204 (No Content)
  }


  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )



  // if (req.method === 'OPTIONS') {
  //   res.status(200).end()
  //   return
  // }
  
  // res.setHeader('Content-Type', 'application/json');
  // res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  // // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.setHeader('Access-Control-Allow-Origin', 'https://todo-react-vercel-o1d6qa8uo-miraj97islams-projects.vercel.app');
  // res.setHeader('Access-Control-Allow-Headers', 'Content-Type Authorization');

  // if (req.method === 'OPTIONS') {
  //   res.statusCode = 204; // No Content
  //   res.end();
  //   return;
  // }


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

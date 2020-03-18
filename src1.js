const express = require('express');;
const bodyParser = require('body-parser')
const app = express();
const port = 3000;
const CORS=require('cors');
const customer = require('./queries1');
const user = require('./queries3');

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(CORS());

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  });

  app.get('/CRUD/Customer/Fetch', customer.getUsers);
  app.post('/CRUD/Customer/create', customer.createUser);
  app.put('/CRUD/Customer/save/:id', customer.updateUser);
  app.delete('/CRUD/Customer/Delete/:id', customer.deleteUser);

  app.get('/CRUD/Fetch', user.getUsers);
  app.post('/CRUD/create', user.createUser);
  app.put('/CRUD/save/:id', user.updateUser);
  app.delete('/CRUD/Delete/:id', user.deleteUser);


  app.listen(port, () => {
    console.log(`App running on port ${port}.`)
  });



const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'data',
  password: 'Source@123',
  port: 5432,
});

const getUsers = (request, response) => {
    pool.query('SELECT customerid,name FROM Customer', (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };


  const deleteUser = (request, response) => {
    const id =request.params.name;
  
    pool.query('DELETE FROM Customer WHERE customerid = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send();
    })
  };

  const createUser = (request, response) => {
    const {name,address,website } = request.body;
    console.log(email);
    pool.query(`INSERT INTO Customer
    (name,
    address,
    website) 
    VALUES ($1, $2,$3)
    RETURNING id`,
     [name,address,website], (error, result) => {
      if (error) {
        throw error
      }
      response.status(201).send();
    })
  };

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {name,address,website} = request.body;
    console.log(request.body);
    pool.query(
      'UPDATE Customer SET name=$1,address=$2 website=$3 WHERE customerid=$4',
      [name,address,website,id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(``)
      }
    )
  }

  module.exports = {
    getUsers,
    deleteUser,
    createUser,
    updateUser  

  };

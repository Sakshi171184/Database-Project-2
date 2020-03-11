const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'data',
  password: 'Source@123',
    port: 5432,
});

const getUsers = (request, response) => {
    pool.query(`SELECT
      Employee.id,
      Employee.firstname,
      Employee.middlename,
      Employee.lastname,
      Employee.email,
      Employee.phonenumber,
      Employee.address,
      RoleKey.role,
      Customer.name
    FROM
      Employee
    INNER JOIN RoleKey ON Employee.RoleKeyid = RoleKey.RoleKeyid
    INNER JOIN Customer ON Employee.customerid = Customer.customerid
    ORDER BY
      Employee.id;`, (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).json(results.rows)
    })
  };
  const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)
  
    pool.query('DELETE FROM Employee WHERE id = $1', [id], (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User deleted with ID: ${id}`)
    })
  };

  const createUser = (request, response) => {
    const { id,firstname,middlename,lastname,email,phonenumber,address,role,name} = request.body;
    console.log(firstname,middlename,lastname,email,phonenumber,address,+role+(+1),+name)
    pool.query(`INSERT INTO Employee
    (firstname,
    middlename,
    lastname,
    email,
    phonenumber,
    address,
    RoleKeyid,
    Customerid) 
    VALUES ($1, $2,$3,$4,$5,$6,$7,$8)
    RETURNING id`,
     [firstname,middlename,lastname,email,phonenumber,address,+role+(+1),+name], (error, result) => {
      if (error) {
        throw error
      }
      console.log(result.rows[0].id);
      response.status(201).json(result.rows[0].id)
    })
  };

  const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const {firstname,middlename,lastname,email,phonenumber,address,role,name} = request.body;
    console.log(request.body);
    pool.query(
      'UPDATE Employee SET Firstname=$1,Middlename=$2,Lastname=$3,email=$4,phonenumber=$5,address=$6,RoleKeyid=$7,customerid =$8 WHERE id=$9',
      [firstname,middlename,lastname,email,phonenumber,address,(+role)+(+1),+name,id],
      (error, result) => {
        if (error) {
          throw error
        }
        response.status(200).send(`User modified with ID: ${id}`)
      }
    )
  }

  module.exports = {
    getUsers,
    deleteUser,
    createUser,
    updateUser  

  };
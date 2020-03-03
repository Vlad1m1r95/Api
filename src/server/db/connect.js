const Sequelize = require('sequelize')
const db = new Sequelize('ExpressDb', 'postgres', 'Rimider1701', {
  dialect: 'postgres',
  host: 'localhost',
  define: {
    timestamps: false,
  },
})
// module.exports.db
// const User = require('../model/User')
const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
db.sync()
  .then(result => {
    console.log(result.rows)
  })
  .catch(err => console.log(err))
const { Client } = require('pg')

const connectionString =
  'postgressql://postgres:Rimider1701@localhost:5432/ExpressDb'
const client = new Client({
  connectionString: connectionString,
})
client.connect()
const express = require('express')

const app = express()
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*')
  response.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
})
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.get('/users', function(request, response) {
  let users = ''
  client.query('SELECT * FROM users', (err, result, fields) => {
    users = result.rows
    response.send(users)
  })
})
app.post('/users', function(request, response) {
  console.log(request.body.name)

  User.create({
    name: request.body.name,
    email: request.body.email,
  })
    .then(res => {
      console.log(`Пользователь добавлен`)
      console.table(request.body)
    })
    .catch(err => console.log(err))

  response.send(`Пользователь  добавлен в базу данных`)
})

app.get('/contact', function(request, response) {
  response.send('<h1>Контакты</h1>')
})
app.listen(3000, function() {
  console.log('Example app listening on port 3000!')
})

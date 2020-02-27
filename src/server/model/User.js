const db = require("../db/connect")

const User = db.define("user", {
  id: {
    type: db.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: db.STRING,
    allowNull: false
  },
  email: {
    type: db.INTEGER,
    allowNull: false
  }
})

module.exports.User
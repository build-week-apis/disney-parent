const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex("parents").insert([
    {
      username: "Alan",
      password: bcrypt.hashSync("password", 8),
      email: "123@gmail.com"
    },
    {
      username: "John",
      password: bcrypt.hashSync("password", 8),
      email: "terry123@gmail.com"
    },
    {
      username: "Terry",
      password: bcrypt.hashSync("password", 8),
      email: "john123@gmail.com"
    },
    {
      username: "Jane",
      password: bcrypt.hashSync("password", 8),
      email: "jane123@gmail.com"
    },
    {
      username: "Bob",
      password: bcrypt.hashSync("password", 8),
      email: "bob123@gmail.com"
    }
  ]);
};

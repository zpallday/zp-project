
const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'admins', password:bcrypt.hashSync("admin", 12)},
        {username: 'Name2', password:bcrypt.hashSync("password", 12)},
        {username: 'Name3', password:bcrypt.hashSync("password", 12)},
      ]);
    });
};

exports.up = function(knex) {
    return knex.schema.createTable('users', users => {
      users.increments();

      users
        .string('username', 112)
        .notNullable()
        .unique();
      users.string('password', 112).notNullable();
    });
  };
  

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};

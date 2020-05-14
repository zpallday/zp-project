
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('AFC').del()
    .then(function () {
      // Inserts seed entries
      return knex('AFC').insert([
        {id: 1, colName: 'Bills'},
        {id: 2, colName: 'Dolphins'},
        {id: 3, colName: 'Patriots'},
        {id: 4, colName: 'Jets'},
        {id: 5, colName: 'Ravens'},
        {id: 6, colName: 'Bengals'},
        {id: 7, colName: 'Browns'},
        {id: 8, colName: 'Steelers'},
        {id: 9, colName: 'Texans'},
        {id: 10, colName: 'Colts'},
        {id: 11, colName: 'Jaguars'},
        {id: 12, colName: 'Titans'},
        {id: 13, colName: 'Broncos'},
        {id: 14, colName: 'Chiefs'},
        {id: 15, colName: 'Raiders'},
        {id: 16, colName: 'Chargers'},
      ]);
    });
};

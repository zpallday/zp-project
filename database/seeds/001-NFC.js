
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('NFC').del()
    .then(function () {
      // Inserts seed entries
      return knex('NFC').insert([
        {id: 1, colName: 'Vikings'},
        {id: 2, colName: 'Packers'},
        {id: 3, colName: 'Lions'},
        {id: 4, colName: 'Bears'},
        {id: 5, colName: 'Cowboys'},
        {id: 6, colName: 'Redskins'},
        {id: 7, colName: 'Eagles'},
        {id: 8, colName: 'Gaints'},
        {id: 9, colName: 'Saints'},
        {id: 10, colName: 'Panters'},
        {id: 11, colName: 'Buccaneers'},
        {id: 12, colName: 'Falcons'},
        {id: 13, colName: '49ers'},
        {id: 14, colName: 'Rams'},
        {id: 15, colName: 'Seahawks'},
        {id: 16, colName: 'Cardinals'},
      ]);
    });
};


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('NFL').del()
    .then(function () {
      // Inserts seed entries
      return knex('NFL').insert([
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

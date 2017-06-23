exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('terran_units').del()
    .then(function() {
      // Inserts seed entries
      return knex('terran_units').insert([
        {
          id: 1,
          unit: 'SCV',
          mineral: '50',
          vespene: '-',
          supply: '1',
          buildTime: '17',
          buildFrom: 'Command Center',
          life: '45',
          energy: '-',
          armor: '0'
        },
        {
          id: 2,
          unit: 'Marine',
          mineral: '50',
          vespene: '-',
          supply: '1',
          buildTime: '25',
          buildFrom: 'Barracks',
          life: '45',
          energy: '-',
          armor: '0'
        },
        {
          id: 3,
          unit: 'Maurader',
          mineral: '100',
          vespene: '25',
          supply: '2',
          buildTime: '30',
          buildFrom: 'Barracks',
          life: '125',
          energy: '-',
          armor: '1'
        }
      ]);
    });
};

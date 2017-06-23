exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('zerg_units').del()
    .then(function() {
      // Inserts seed entries
      return knex('zerg_units').insert([
        {
          id: 1,
          unit: 'Larva',
          mineral: '-',
          vespene: '-',
          supply: '-',
          buildTime: '-',
          buildFrom: '-',
          life: '25',
          energy: '-',
          armor: '10'
        },
        {
          id: 2,
          unit: 'Drone',
          mineral: '50',
          vespene: '-',
          supply: '1',
          buildTime: '17',
          buildFrom: 'Larva',
          life: '40',
          energy: '-',
          armor: '0'
        },
        {
          id: 3,
          unit: 'Overlord',
          mineral: '100',
          vespene: '-',
          supply: '-',
          buildTime: '25',
          buildFrom: 'Larva',
          life: '200',
          energy: '-',
          armor: '0'
        },
        {
          id: 4,
          unit: 'Zergling',
          mineral: '50',
          vespene: '-',
          supply: '1',
          buildTime: '24',
          buildFrom: 'Larva',
          life: '35',
          energy: '-',
          armor: '0'
        }
      ]);
    });
};

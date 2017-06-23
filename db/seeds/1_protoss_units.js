exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('protoss_units').del()
    .then(function() {
      // Inserts seed entries
      return knex('protoss_units').insert([
        {
          id: 1,
          unit: 'Probe',
          mineral: '50',
          vespene: '-',
          supply: '1',
          buildTime: '17',
          buildFrom: 'Nexus',
          life: '20',
          shields: '20',
          energy: '-',
          armor: '0'
        },
        {
          id: 2,
          unit: 'Zealot',
          mineral: '100',
          vespene: '-',
          supply: '2',
          buildTime: '38',
          buildFrom: 'Gateway',
          life: '100',
          shields: '50',
          energy: '-',
          armor: '1'
        },
        {
          id: 3,
          unit: 'Stalker',
          mineral: '125',
          vespene: '50',
          supply: '2',
          buildTime: '42',
          buildFrom: 'Gateway',
          life: '80',
          shields: '80',
          energy: '-',
          armor: '1'
        }
      ]);
    });
};

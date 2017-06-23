exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('test').del()
    .then(function() {
      // Inserts seed entries
      return knex('test').insert([{
          id: 1,
          name: 'John'
        },
        {
          id: 2,
          name: 'Jeff'
        }
      ]);
    });
};

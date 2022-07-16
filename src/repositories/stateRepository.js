const model = require('../database');
const paginate = require('../utils/paginate');
const table = 'states';

const columns = [
  'states.id as state_id',
  'states.name as state_name',
  'states.uf as state_uf',
  'cities.id as city_id',
  'cities.name as city_name',
];

module.exports = {
  paginate(req) {
    const states = model.table(table)
        .select(columns)
        .join('cities', function() {
          this.on('cities.state_id', '=', 'states.id');
        })
        .orderBy('state_name', 'asc');

    return paginate(states, req);
  },

  findByState(state) {
    return model.table(table)
        .select('*')
        .whereILike('name', `${state}%`)
        .first();
  },

  findByStateAndCity(state, city) {
    return model.table(table)
        .select(columns)
        .join('cities', function() {
          this.on('cities.state_id', '=', 'states.id');
        })
        .whereILike('states.name', `${state}%`)
        .andWhereILike('cities.name', `${city}%`)
        .orderBy('state_name', 'asc')
        .first();
  },
};

const table = 'apps';
const model = require('../database');
const paginate = require('../utils/paginate');

const columns = [
  'id',
  'name',
  'url',
  'cover',
];

module.exports = {
  paginate(req) {
    const apps = model.table(table)
        .select(columns)
        .orderBy('id', 'asc');

    return paginate(apps, req);
  },
};

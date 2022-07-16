const appRepository = require('../repositories/appRepository');

module.exports = {
  paginate(req) {
    return appRepository.paginate(req);
  },
};

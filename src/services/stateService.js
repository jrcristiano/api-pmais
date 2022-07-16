const stateRepository = require('../repositories/stateRepository');

module.exports = {
  paginate(req) {
    return stateRepository.paginate(req);
  },

  findByState(state) {
    return stateRepository.findByState(state);
  },

  findByStateAndCity(state, city) {
    return stateRepository.findByStateAndCity(state, city);
  },
};

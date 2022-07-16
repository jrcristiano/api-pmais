const stateService = require('../services/stateService');

module.exports = {
  async index(req, res) {
    try {
      return res.status(200).json(await stateService.paginate(req));
    } catch ({message}) {
      return res.status(500).json({message});
    }
  },

  async show(req, res) {
    try {
      const {state, city} = req.params;
      if (!state) {
        return res.status(404).json({
          message: `State ${req.params.state} not found.`,
        });
      }

      if (!city) {
        return res.status(200).json(
            await stateService.findByState(state),
        );
      }

      return res.status(200).json(
          await stateService.findByStateAndCity(state, city),
      );
    } catch ({message}) {
      return res.status(500).json({message});
    }
  },
};

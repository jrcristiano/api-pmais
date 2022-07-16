const appService = require('../services/appService');

module.exports = {
  async index(req, res) {
    try {
      return res.status(200).json(await appService.paginate(req));
    } catch ({message}) {
      return res.status(500).json({message});
    }
  },
};

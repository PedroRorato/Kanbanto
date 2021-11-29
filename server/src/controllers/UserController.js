const { Op } = require("sequelize");

//Models
const { User } = require("../models");

//Main Functions
module.exports = {

  async search(request, response) {
    const { search } = request.query;

    const users = await User.findAll({
      where: {
        [Op.or]: [
          { email: { [Op.like]: search + "%" } },
          { name: { [Op.like]: "%" + search + "%" } }
        ]
      },
    });

    return response.status(200).json(users);
  }

};
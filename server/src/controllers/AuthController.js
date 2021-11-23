const { compare, hash } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

//Config
const authConfig = require("../config/auth");

//Models
const { User } = require("../models");

//Main Functions
module.exports = {

  async register(request, response) {
    const { name, email, password } = request.body;

    const hashedPassword = await hash(password, 8);

    try {
      await User.create({ name, email, password: hashedPassword });
      return response.status(200).json("User successfully created!");
    } catch (error) {
      return response.status(500).json(error.message);
    }
  },

  async login(request, response) {
    const { email, password } = request.body;

    const user = await User.scope("withPassword").findOne({
      where: {
        email,
      },
    });

    //Verifica se usuario foi encontrado
    if (!user) {
      return response.json("Incorrect email or password!");
    }
    const sessionData = user.toJSON();

    //Test password
    const passwordMatched = await compare(password, sessionData.password);
    if (!passwordMatched) {
      return response.json("Incorrect email or password!");
    }

    //Configura JWT
    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({ sessionData }, secret, {
      subject: sessionData.id.toString(),
      expiresIn,
    });

    return response.json({ token, sessionData });
  }

};
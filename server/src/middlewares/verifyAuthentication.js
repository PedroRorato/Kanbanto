const { verify } = require("jsonwebtoken");

//Config
const authConfig = require("../config/auth");

//Main
const verifyAuthentication = (request, response, next) => {
  //Validação do token
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.json("Unauthenticated user!");
  }

  //Obter token
  const [, token] = authHeader.split(" ");

  try {
    //Testa o token
    const decoded = verify(token, authConfig.jwt.secret);

    const { id, name, email, picture } = decoded.sessionData;

    request.session = {
      id,
      name,
      email,
      picture,
    };

    return next();
  } catch (err) {
    console.log(err);
    return response.json({ error: "Unauthenticated user! Invalid Token!" });
  }
};

module.exports = verifyAuthentication;

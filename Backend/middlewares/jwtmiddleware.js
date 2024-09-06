import jwt from "jsonwebtoken";

const jwtAuth = (req, res, next) => {
  //read token
  const token = req.headers["authorization"];

  //no token
  if (!token) {
    return res.status(401).send("Unauthorized");
  }

  //token valid
  try {
  const payload=  jwt.verify(token, 'k0LYFoM1LLtPX22ogK6oXGxkHeeHJoGS');
  console.log(payload);  
} catch (err) {
    return res.status(401).send("Unauthorized");
  }
  //next middleware
next();

};

export default jwtAuth;

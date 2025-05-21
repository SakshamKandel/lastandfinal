import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";

configDotenv()

const tokenVerify = async (req, res, next) => {
  try {
    let token = null;
    const authHeader = req.headers['authorization'];
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }
    if (!token) {
      return res.status(401).send("Unauthorized Access");
    }
    const data = jwt.verify(token, process.env.SECRET_KEY);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export default tokenVerify
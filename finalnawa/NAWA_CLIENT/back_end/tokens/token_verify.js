import jwt from "jsonwebtoken"
import { configDotenv } from "dotenv";

configDotenv()

const tokenVerify = async (req, res, next) => {
  try {
    let token = null;
    const authHeader = req.headers['authorization'];
    console.log('Authorization Header:', authHeader); // Debug log
    if (authHeader && authHeader.startsWith('Bearer ')) {
      token = authHeader.split(' ')[1];
    }
    if (!token) {
      console.log('No token provided');
      return res.status(401).send("Unauthorized Access");
    }
    const data = jwt.verify(token, process.env.SECRET_KEY);
    console.log('Decoded JWT:', data); // Debug log
    req.user = data.user;
    next();
  } catch (error) {
    console.log('JWT verification error:', error); // Debug log
    res.status(401).send(error.message);
  }
};

export default tokenVerify
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

export const verifyToken = (req, res, next) => {
  let token = null;
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export const verifyAdmin = (req, res, next) => {
  let token = null;
  const authHeader = req.headers['authorization'];
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }
  if (!token) {
    return res.status(401).json({ message: 'Admin access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    if (!decoded.user || decoded.user.role !== 'Admin') {
      return res.status(403).json({ message: 'Forbidden: Admins only.' });
    }
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};
 
import jwt from 'jsonwebtoken';
import { configDotenv } from 'dotenv';

configDotenv();

export const verifyToken = (req, res, next) => {
  let token = null;
  const authHeader = req.headers['authorization'];
  console.log('Authorization Header:', authHeader); // Debug log
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log('Decoded JWT:', decoded); // Debug log
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log('JWT verification error:', error); // Debug log
    res.status(400).json({ message: 'Invalid token.' });
  }
};

export const verifyAdmin = (req, res, next) => {
  let token = null;
  const authHeader = req.headers['authorization'];
  console.log('Authorization Header:', authHeader); // Debug log
  if (authHeader && authHeader.startsWith('Bearer ')) {
    token = authHeader.split(' ')[1];
  }
  if (!token) {
    console.log('No token provided');
    return res.status(401).json({ message: 'Admin access denied. No token provided.' });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    console.log('Decoded JWT:', decoded); // Debug log
    if (!decoded.user || decoded.user.role !== 'Admin') {
      console.log('Forbidden: Not an admin');
      return res.status(403).json({ message: 'Forbidden: Admins only.' });
    }
    req.user = decoded.user;
    next();
  } catch (error) {
    console.log('JWT verification error:', error); // Debug log
    res.status(400).json({ message: 'Invalid token.' });
  }
};
 
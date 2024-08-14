import { Request, Response } from "express";
import { generateToken } from "../middleware/token";

export const createToken = (req : Request, res : Response) => {
    const { username } = req.body;
    if (username === process.env.USER_NAME) {
      const token = generateToken(username);
      return res.json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
}
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken';

export function generateToken(username : string) {
    return jwt.sign({ username }, process.env.SUPER_KEY!);
}

export const authenticateToken = async (req : Request, res : Response, next : NextFunction) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (token == null) return res.sendStatus(401);

        jwt.verify(token, process.env.SUPER_KEY!, (err, user) => {
            if (err) return res.sendStatus(403);
            next();
        });
    } catch (error) {
        return res.send(error)
    }
}
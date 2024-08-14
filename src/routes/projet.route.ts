import express, { Request, Response} from 'express';
import multer, { memoryStorage } from 'multer';
import { getProjet, setProjet } from '../controllers/projet.controller';
import { authenticateToken, generateToken } from '../middleware/token';
import dotenv from 'dotenv';

dotenv.config()
const projectRouter = express.Router()

// we post projects
const upload = multer({ storage : memoryStorage()})
projectRouter.post('/', authenticateToken, upload.single('imgUrlOfProjet'), setProjet)

projectRouter.post('/newtoken', (req : Request, res : Response) => {
    const { username } = req.body;
    console.log(process.env.USER_NAME);
    if (username === process.env.USER_NAME) {
      const token = generateToken(username);
      return res.json({ token });
    } else {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
});

// we get projects
projectRouter.get('/',authenticateToken, getProjet)

export default projectRouter

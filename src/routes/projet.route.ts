import express from 'express';
import multer, { memoryStorage } from 'multer';
import { getProjet, setProjet } from '../controllers/projet.controller';
import { authenticateToken } from '../middleware/token';
import dotenv from 'dotenv';

dotenv.config()
const projectRouter = express.Router()

// we post projects
const upload = multer({ storage : memoryStorage()})
projectRouter.post('/', authenticateToken, upload.single('imgUrlOfProjet'), setProjet)

// we get projects
projectRouter.get('/', authenticateToken, getProjet)

export default projectRouter

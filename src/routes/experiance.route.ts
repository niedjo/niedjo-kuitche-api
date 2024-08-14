import express from 'express';
import multer, { memoryStorage } from 'multer';
import { authenticateToken } from '../middleware/token';
import { getExperiance, setExperiance } from '../controllers/experiance.controller';

const experianceRouter = express.Router()

// we post experiance
const upload = multer({ storage : memoryStorage()})
experianceRouter.post('/', authenticateToken, upload.single('imgUrlOfExperiance'), setExperiance)

// we get experiance
experianceRouter.get('/', authenticateToken, getExperiance)


export default experianceRouter
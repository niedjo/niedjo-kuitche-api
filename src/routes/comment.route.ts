import express from 'express';
import multer, { memoryStorage } from 'multer';
import { authenticateToken } from '../middleware/token';
import { getComment, setComment } from '../controllers/comment.controller';

const commentRouter = express.Router()

// we post comment
const upload = multer({ storage : memoryStorage()})
commentRouter.post('/', authenticateToken, upload.single('profileUrl'), setComment)

// we get comment
commentRouter.get('/', authenticateToken, getComment)


export default commentRouter
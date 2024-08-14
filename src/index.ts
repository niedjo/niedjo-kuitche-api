import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db';

// we import our routes
import projectRouter from './routes/projet.route';
import commentRouter from './routes/comment.route';
import experianceRouter from './routes/experiance.route';
import bodyParser from 'body-parser';
import tokenRouter from './routes/token.route';


dotenv.config();

const app = express();

// we define the port
const PORT = process.env.PORT || 5000;

// we connect our project to the database

connectDB()

// middlewares
app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
// Augmenter la limite de taille pour les requêtes JSON
app.use(bodyParser.json({ limit: '10mb' }));  // Définit une limite de 10MB pour les requêtes JSON
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true })); // Définit une limite de 10MB pour les requêtes URL-encoded



// routes
app.use('/projet', projectRouter)
app.use('/comment', commentRouter)
app.use('/experiance', experianceRouter)
app.use('/newtoken', tokenRouter)
// we lounch the server
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

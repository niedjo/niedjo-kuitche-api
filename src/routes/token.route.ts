import express from "express";
import { createToken } from "../controllers/token.controller";

const tokenRouter = express.Router()
// we create a new token
tokenRouter.post('/', createToken);

export default tokenRouter
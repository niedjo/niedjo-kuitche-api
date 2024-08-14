import { Request, Response } from 'express'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase.config';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import experianceModel from '../models/experiance.model';

export const setExperiance = async (req : Request, res : Response) => {
    
    try {
        if (
            !req.file 
            || !req.body.experianceName 
            || !req.body.description 
        ) return res.status(401).json({ message : "pleade, give valu of all the fields"})
    
        // we create a bucket of our image
        initializeApp(firebaseConfig)
        const dateTime = Date.now()
        const storage = getStorage()
        const storageRef = ref(storage, `portfolio/experiances/${dateTime}${req.file.originalname}`)

        // Create file metadata including the content type
        const metadata = {
            contentType : req.file.mimetype
        }

        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

        const downloadURL = await getDownloadURL(snapshot.ref)
        
        // we save the project in our database
        const experiance = await experianceModel.create({
    
            imgUrlOfExperiance : downloadURL,
            experianceName : req.body.experianceName,
            description : req.body.description,
    
        })
        res.status(200).json(experiance)
        
    } catch (error : unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return res.status(400).send(error.message)
        }
    }
} 

export const getExperiance = async (req : Request, res : Response) => {
    try {
        const experiance = await experianceModel.find().sort({ createdAt : -1})
        res.status(200).json(experiance)
    } catch (error : unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return res.status(400).send(error.message)
        }
    }
}

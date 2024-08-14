import { Request, Response } from 'express'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase.config';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'
import commentModel from '../models/comment.model';

export const setComment = async (req : Request, res : Response) => {
    
    try {
        if (
            !req.body.peopleName 
            || !req.body.peopleWorkstation 
            || !req.body.comment 
        ) return res.status(401).json({ message : "pleade, give valu of all the fields"})
    
        let downloadURL = null
        if(req.file) {
            // we create a bucket of our image
            initializeApp(firebaseConfig)
            const dateTime = Date.now()
            const storage = getStorage()
            const storageRef = ref(storage, `portfolio/commentator/${dateTime}${req.file.originalname}`)
    
            // Create file metadata including the content type
            const metadata = {
                contentType : req.file.mimetype
            }
    
            const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)
    
            downloadURL = await getDownloadURL(snapshot.ref)
        }
        
        // we save the project in our database
        const comment = await commentModel.create({
    
            profileUrl : downloadURL,
            peopleName : req.body.peopleName,
            peopleWorkstation : req.body.peopleWorkstation,
            comment : req.body.comment,
    
        })
        res.status(200).json(comment)
        
    } catch (error : unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return res.status(400).send(error.message)
        }
    }
} 

export const getComment = async (req : Request, res : Response) => {
    try {
        const comment = await commentModel.find().sort({ createdAt : -1})
        res.status(200).json(comment)
    } catch (error : unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return res.status(400).send(error.message)
        }
    }
}

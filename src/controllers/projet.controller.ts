import { Request, Response } from 'express'
import projetModel from "../models/projet.model";
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../config/firebase.config';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage'

export const setProjet = async (req : Request, res : Response) => {
    
    try {
        if (
            !req.file
            || !req.body.projectName 
            || !req.body.description 
            || !req.body.fullDescription 
            || !req.body.technologie
        ) return res.status(401).json({ message : "pleade, give valu of all the fields"})
    
        // we create a bucket of our image
        initializeApp(firebaseConfig)
        const dateTime = Date.now()
        const storage = getStorage()
        const storageRef = ref(storage, `portfolio/imgUrlOfProjet/${dateTime}${req.file.originalname}`)

        // Create file metadata including the content type
        const metadata = {
            contentType : req.file.mimetype
        }

        const snapshot = await uploadBytesResumable(storageRef, req.file.buffer, metadata)

        const downloadURL = await getDownloadURL(snapshot.ref)
        
        // we save the project in our database
        const projet = await projetModel.create({
    
            imgUrlOfProjet : downloadURL,
            projectName : req.body.projectName,
            description : req.body.description,
            fullDescription : req.body.fullDescription,
            technologie : JSON.parse(req.body.technologie),
            urlOfSite : req.body.urlOfSite,
            downloadUrl : req.body.downloadUrl,
            githubUrl : req.body.githubUrl,
            demoUrl : req.body.demoUrl
    
        })
        res.status(200).json(projet)
        
    } catch (error : unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return res.status(400).send(error.message)
        }
    }
} 

export const getProjet = async (req : Request, res : Response) => {
    try {
        const projet = await projetModel.find().sort({ createdAt : -1})
        res.status(200).json(projet)
    } catch (error : unknown) {
        if (error instanceof Error) {
            console.error(error.message);
            return res.status(400).send(error.message)
        }
    }
}

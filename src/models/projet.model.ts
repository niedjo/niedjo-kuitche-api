import mongoose, { Schema, model } from "mongoose";

// create a schema

const projetSchema : mongoose.Schema = new Schema(
    {
        imgUrlOfProjet : {
            type : String,
            required : true
        },
        projectName : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
        fullDescription : {
            type : String,
            required : true
        },
        technologie : {
            type : [String],
            required : true
        },
        urlOfSite : {
            type : String
        },
        downloadUrl : {
            type : String
        },
        githubUrl : {
            type : String
        },
        demoUrl : {
            type : String
        }
    },
    {
        timestamps : true
    }
)

export default model('projet', projetSchema)


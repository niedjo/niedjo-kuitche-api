import mongoose, { Schema, model } from "mongoose";

// create a schema

const experianceSchema : mongoose.Schema = new Schema(
    {
        imgUrlOfExperiance : {
            type : String,
            required : true
        },
        experianceName : {
            type : String,
            required : true
        },
        description : {
            type : String,
            required : true
        },
    },
    {
        timestamps : true
    }
)

export default model('experiance', experianceSchema)


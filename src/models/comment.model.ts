import mongoose, { Schema, model } from "mongoose";

// create a schema

const commentSchema : mongoose.Schema = new Schema(
    {
        peopleName : {
            type : String,
            required : true
        },
        peopleWorkstation : {
            type : String,
            required : true
        },
        comment : {
            type : String,
            required : true
        },
        profileUrl : {
            type : String,
        }
    },
    {
        timestamps : true
    }
)

export default model('projet', commentSchema)


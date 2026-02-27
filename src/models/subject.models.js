import mongoose from "mongoose";
import { string } from "zod";
import { required } from "zod/mini";

const subjectSchema = new mongoose.Schema(
    {
        subjectname:{
            type:string,
            required:true,
        },
        key:{
            type:String,
            required:true,
            unique:true
        },
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User',
            required:true,
        }
    },
    {
    timestamps:true,
}
);
export default mongoose.model("Subject",subjectSchema)

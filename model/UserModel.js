import mongoose from "mongoose";

const obj = {
    name: String,
    dateOfBirth: String,
    placeOfBirth: String,
    nationality: String,
    EducationalProcess: String,
    hobby: String,
    personalGoal: String,
}

const ProductSchema = new mongoose.Schema(obj);
const UserModel = mongoose.model("user",ProductSchema)

export default UserModel
import mongoose from "mongoose";

const obj = {
    personalSkill: String,
    personalProject: String,
    workProgress: String
}
const UserExperienceSchema = new mongoose.Schema(obj)
const UserExperienceModel = mongoose.model("userExperience", UserExperienceSchema,"userExperience")

export default UserExperienceModel
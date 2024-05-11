import UserModel from "../model/UserModel.js";
import AccountModel from "../model/AccountModel.js";
import bcrypt, {genSaltSync, hashSync} from "bcrypt"
import UserExperienceModel from "../model/UserExperienceModel.js";

const ProductController = {
    getUser: async (req, res) =>{
        const users = await UserModel.find()
        res.status(200).send({
            data: users
        })
    },
    createUser: async (req,res) => {
        const {name, dateOfBirth, placeOfBirth, nationality, EducationalProcess, hobby, personalGoal} = req.body
        const user = await UserModel.create({
            name: name,
            dateOfBirth: dateOfBirth,
            placeOfBirth: placeOfBirth,
            nationality: nationality,
            EducationalProcess: EducationalProcess,
            hobby: hobby,
            personalGoal: personalGoal
        })
        res.status(200).send({
            message:"Create success",
            data: user
        })
    },
    updateUser: async (req,res) => {
        const add = req.body
        const {id} = req.params
        const result = await UserModel.findById(id)
        const updateUser = result.push(add)
        await updateUser.save()
        res.status(200).send({
            message: "Update success",
            update: updateUser
        })
    },
    deleteUser: async (req, res) =>{
        const {id} = req.params
        const deleteContainer = req.body
        const user = await UserModel.find(id)
        const userDelete = user.splice(deleteContainer, 1)
        await userDelete.save()
        res.status(200).send({
            message:"Delete Success"
        })
    },
    login: async (req, res) => {
        const {username, password} = req.body
        const account = await AccountModel.findOne({
            username: username,
            password: password
        });
        if (account == null){
            res.status(401).send(
                {
                    message: "Username or password incorrect!"
                }
            )
            return
        }
        res.status(200).send({
            message: "Login Success",
            username: username
        })
    },
    createAccount: async (req,res) =>{
        const {username, password} = req.body
        const salt = genSaltSync(10);
        const password2 = bcrypt.hashSync(password, salt)
        const newAccount = await AccountModel.create({
            username: username,
            password: password2
        })
        res.status(200).send({
            message:"Create success",
            data: newAccount
        })
    },
    userExperience: async (req, res) => {
        const users = await UserExperienceModel.find()
        res.status(200).send({
            data: users
        })
    },
    createUserExperience: async (req,res) => {
        const {personalSkill, personalProject, workProgress} = req.body
        const user = await UserExperienceModel.create({
            personalSkill: personalSkill,
            personalProject: personalProject,
            workProgress: workProgress
        })
        res.status(200).send({
            message:"Create success",
            data: user
        })
    },
    updateUserExperience: async (req, res) => {
        const {id} = req.params
        const update = req.body
        const user = await UserExperienceModel.find(id)
        const userUpdate = user.push(update)
        await userUpdate.save()
        res.status(200).send({
            message:"Update success"
        })
    },
    deleteUserExperience: async (req, res) => {
        const {id} = req.params
        const userDelete = req.body
        const user = await UserExperienceModel.find(id)
        const deleteContainer = user.splice(userDelete, 1)
        await deleteContainer.save()
        res.status(200).send({
            message:"Delete Success"
        })
    }
}
export default ProductController
import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import ProductController from "./controller/ProductController.js";

const app = express()
app.use(express.json())


dotenv.config()
const PORT = process.env.PORT
const DATABASE_NAME = process.env.DATABASE_NAME
mongoose.connect("mongodb://localhost:27017/" + DATABASE_NAME)

app.listen(PORT, () => {
    console.log("Sever is running")
})

app.post("/login", ProductController.login)

app.post("/createAccount", ProductController.createAccount)

app.get("/user", ProductController.getUser)
app.post("createUser", ProductController.createUser)
app.put("/updateUser", ProductController.updateUser)
app.delete("/userDelete", ProductController.deleteUser)

app.get("/userExperience", ProductController.userExperience)
app.post("createUserExperience", ProductController.createUserExperience)
app.put("/updateUserExperience", ProductController.updateUserExperience)
app.delete("/deleteUserExperience", ProductController.deleteUserExperience)



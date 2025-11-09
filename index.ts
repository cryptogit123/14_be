import express from "express";
import { PrismaClient } from "./generated/prisma/client"

const app = express();
app.use(express.json());
const prisma = new PrismaClient();

app.get('/', (req, res)=>{
    res.send("Hello world 14_be!!!")
})

app.post("/users", async (req, res) => {
    const payload = req.body;
    const users = await prisma.user.create({
        data: {
            email: payload.email
        }
    });
    res.json(users);
})

app.get("/users", async (req, res) => {
    const users = await prisma.user.findMany();
    res.json(users);
})

app.listen(3000, () => {
    console.log('Server started at port 3000')
})

/**
 *  1. create a docker file to containerize the project
 *  2. write a ci_cd pipeline to deploy the image to dockerhub and then to vm
 * 
 * 
 */
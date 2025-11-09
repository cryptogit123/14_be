import express from "express";

const app = express();

app.get('/', (req, res)=>{
    res.send("Hello world 14_be!!!")
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
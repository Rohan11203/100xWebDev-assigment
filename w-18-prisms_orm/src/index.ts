import express, { response } from "express"
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();
const app = express();

app.use(express.json());

app.post("/add-user" , async ( req,res) => {
    const response = await client.user.create({
        data:{
            username: "Rohan",
            password: "12345",

        }
    })

    console.log(response);
    res.send({
        response,
    })
})

app.post("/add-todo", async (req,res) => {
    const response = await client.todos.create({
        data:{
            title: "Go To gymn",
            description: "I'm goinng to gutm",
            done: true,
            userId: 1
        }
    }) 
    console.log(response);
    res.send({
        response
    })
})

app.get("/get-users", async (req,res) => {
    const response = await client.user.findFirst({
        where:{
            id: 1
        },
        include:{
            todos: true
        }
    })
    console.log(response)
    res.send({
        response
    })
})

app.listen(3000, ()=> {
    console.log(`Server is running on port 3000`);
})
const express = require("express");
const { userRouter } = require("./Routes/user.routes");
const { connection } = require("./Connection/connection");
require("dotenv").config();
const cors = require("cors");
const { noteRouter } = require("./Routes/note.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/notes",noteRouter)
app.use("/users",userRouter);

app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Server is connected to DB")
        console.log(`Server is is running at port ${process.env.port}`)

        
    } catch (error) {
        console.log(error)
    }
})
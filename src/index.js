const dotenv=require("dotenv").config();
const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");

const cors = require("cors");



const mongoose = require("mongoose");
const config = require("../config");

app.use(express.json());

app.use(cors());

//routes
app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) =>{
    res.send("Notes API From CheezyCode");
});

const PORT = process.env.PORT;
mongoose.connect(config.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})



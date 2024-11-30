require("dotenv").config();
const express=require("express");
const app=express();
const cors=require("cors");
const authRouter=require("./routes/auth-route")
const connectDatabase=require("./db/db");

connectDatabase();
app.use(cors());
app.use(express.json());

//Routers
app.use("/api/auth",authRouter);

const port=process.env.PORT
app.listen(port,() => {
    console.log(`Server is listning on port`,port)
})
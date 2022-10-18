const express =require('express');
const morgan =require('morgan');
const bodyParser =require('body-parser');
const cors =require('cors');
require('dotenv').config();
const {readdirSync}=require("fs");
const app= express();

app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());
readdirSync("./routes").map((r)=> app.use("/api",require("./routes/"+r)));

const port=process.env.PORT || 8000;
app.listen(port,()=>console.log(`Server is running on port ${port}`));
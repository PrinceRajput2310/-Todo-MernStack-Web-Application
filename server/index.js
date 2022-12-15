import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import todoRoutes from "./routes/todoListRoutes.js";

const app = express();

app.use(bodyParser.json({ limit: "2mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "2mb", extended: true }));
app.use(cors());

app.use("/addtodo", todoRoutes);

// app.use('/',(req,res)=>{
//      res.send("Hello to Memories Api adcgte");
// })

const CONNECTION_URL =
  "mongodb://princekumar:princekumar@ac-9tlppdf-shard-00-00.1tuy4wd.mongodb.net:27017,ac-9tlppdf-shard-00-01.1tuy4wd.mongodb.net:27017,ac-9tlppdf-shard-00-02.1tuy4wd.mongodb.net:27017/?ssl=true&replicaSet=atlas-vtiilr-shard-0&authSource=admin&retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Our server is running on ${PORT}`))
  )
  .catch((error) => console.log(error.message));

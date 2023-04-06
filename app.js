import express from 'express';
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import cors from 'cors'
import mongoose from "mongoose";
// mongoose.connect('mongodb+srv://ushasravani7929:webdevpassword@cluster0.fgzak6c.mongodb.net/?retryWrites=true&w=majority');
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
                          || 'mongodb://localhost:27017/tuiter';
mongoose.connect(CONNECTION_STRING);


const app = express()
app.use(cors())

app.use(express.json());
TuitsController(app);
HelloController(app)
UserController(app)
app.listen(process.env.PORT || 4000);
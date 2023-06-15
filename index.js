import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
// creating collections
import userModal from "./modals/index.js";


// creating connection to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/adarshProject',
    { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());
app.use(routes)

app.listen(port, () => console.log(`server is running in ${port}`));
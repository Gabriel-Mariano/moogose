import * as dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

dotenv.config();

const app = express();
const port = 3333;

mongoose.connect(`mongodb+srv://${process.env.USER_DB}:${process.env.PASS_DB}@cluster0.f1pozvi.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`)
.then(()=> {
    app.listen(port, ()=> {
        console.log(`Server is running at port ${port}`);
    })
})
.catch(error => {
    console.log('error', error);
})

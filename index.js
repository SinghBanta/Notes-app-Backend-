const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const routes = require('./routes/index');
require('dotenv').config();

console.log(process.env.CORS_ORIGIN)
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    method:"GET,POST,PUT,DELETE"
}))

app.use(express.json());

app.use(routes);

// console.log(process.env.DATABASE_URL)
mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("MongoDB is connected");
})
.then(()=>{
    const PORT=3000;
    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
})
.catch((err) => {
    console.log("Server is not responding", err);
});







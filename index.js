const express=require('express');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
const routes = require('./routes/index');

const corsOrigin = process.env.CORS_ORIGIN



app.use(cors({
    origin:corsOrigin,
    method:"GET,POST,PUT,DELETE"
}))

app.use(express.json());

app.use(routes);


mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
    console.log("MongoDB is connected");
})
.then(()=>{
    const PORT=3000;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err) => {
    console.log("Server is not responding", err);
});





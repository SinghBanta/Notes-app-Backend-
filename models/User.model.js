const { Schema,model }=require('mongoose');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,

    },
    password: {
        type: String
    },
    role:{
        type:String,
        enum:["admin","user"],
        default:"user"
    }
});

module.exports = model('User', userSchema);

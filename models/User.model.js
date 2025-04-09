const { Schema,model }=require('mongoose');

const userSchema = new Schema({
    username: {
        type: String
    },
    email: {
        type: String
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

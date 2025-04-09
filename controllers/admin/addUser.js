const User = require("../../models/User.model");


const addUser=async(req,res)=>{
    try{

        const {username,role}=req.body;
        console.log(addUser);
        
        const newUser = await User.create({ 
            username, 
            role 
        });
        console.log(newUser)
        
        return res.status(200).json({message:"User added successfully"});

    }
    catch(err){
        console.log(err);
        res.status(500).json({error:err.message});
    }

}

module.exports=addUser;
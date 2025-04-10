const User = require("../../models/User.model");
const getalluser=async(req,res)=>{
    try{
        const users = await User.find({});
        return res.status(200).json({ users, message: "All users retrieved successfully" });
        }
        catch (err) {
        console.log(err);
        res.status(500).json({error:err.message});
    }

}

module.exports=getalluser;
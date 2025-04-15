const UserModel = require("../../models/User.model");
const jwt = require("jsonwebtoken"); // Require jwt for token generation




const login = async (req, res) => {
    try{
        const {email}=req.body;
        

        const userVerification=await UserModel.findOne({ email});
        console.log("User Verification:", userVerification);

        // Removed redundant userVerification check

        if (!userVerification) {
          return res.status(401).json({ message: 'User not found' });
          }

        if (userVerification.role === 'admin') {
           console.log(process.env.JWT_ADMIN_PASSWORD);


        const token = jwt.sign(
            {
              id: userVerification._id,
            },
            process.env.JWT_ADMIN_PASSWORD
          );
      
          res.json({
            token: token,
          });

        }else{
            return res.status(403).json({ message: 'Unauthorized user' });
        }
        
         

    } // Closing the try block
    catch(error){
        console.error("Error during login:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}  
module.exports=login;


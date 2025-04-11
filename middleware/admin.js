const jwt=require("jsonwebtoken");


function adminMiddleware(req,res,next){
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Token is required"
        });
    }

    const decoded = jwt.verify(token, process.env.JWT_ADMIN_PASSWORD);

    if(decoded){
        req.userId=decoded.id;
        next();
    }else{
        res.json({
            message:"You are not signed in"
        })
    }


}

module.exports={adminMiddleware};
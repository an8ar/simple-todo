const jwt=require("jsonwebtoken")


module.exports = (req,res,next)=>{
    if(req.methods === 'OPTIONS'){
        next();
    }
    try {
        const token  = req.headers.authorization.split(' ')[1];
        if(!token){
            res.status(401).json({messege: 'Not authorized'})
        }
        const decoded = jwt.decode(token,process.env.SECRET_KEY);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({messege: 'Not authorized'})
    }
}

// module.exports=function(err,req,res,next){
//     if (req.method === "OPTIONS") {
//         next()
//     }
//     try{
//         const token=req.headers.authorization.split(' ')[1]
//         if (!token) {
//             return res.status(401).json({message: "Не авторизован"})
//         }
//         const decoded=jwt.verify(token,process.env.SECRET_KEY)
//         req.user=decoded
//         next()
//     }
//     catch(e){
//         res.status(401).json({message:"Not authorized"})
//     }
// }
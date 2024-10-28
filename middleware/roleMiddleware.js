const jwt = require('jsonwebtoken');
const roleMiddleware = (roles)=>{
    return(req , res,next)=>{
        const token = req.headers['authorization'];
        if (!token) return 
        res.status(401).json({error:"No token provided"});
        jwt.verify(token,'secretKey',(err ,decoded) => {
            if(err) return 
            res.status(403).json({error:"Failed to authenticate token"});
            if (! roles.includes(decoded.role)){
                return res.status(403).json({error:"Access denied"});

            }
            req.userId = decoded.id;
            req.userRole = decoded.role;
            next();

        });
    };
};
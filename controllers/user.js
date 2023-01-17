const User=require("../model/User")

exports.register=async (req,res)=>{
    try {
      const {name,email,password,phone}=req.body;
       const foundUser =await User.findOne({email})
       if (foundUser)
       {res.status(400).send({erros: [{msg:"email deja utulise"}]})}
    const newUser=new User({...req.body})
    await newUser.save()
    res.status(400).send({success: [{msg:"welcome"}],user:newUser})}
catch(error){
        res.status(400).send({erros: [{msg:"try again"}]})}
    }
        

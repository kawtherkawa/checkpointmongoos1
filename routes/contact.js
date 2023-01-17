const express=require("express")
const router=express.Router();
 const Contact=require("../Model/Contact")

router.get("/test",(req,res)=>{
res.send("hello") 
})
router.post("/add",async(req,res)=>{
    try{
const {name,email,phone}=req.body
const newContact= new Contact({name,email,phone})
await newContact.save()
res.status(200).send({msg: "contact added",newContact})
    }catch(error){
        res.status(400).send({msg:"contact not added",error})
    }
})
router.get("/all-user",async(req,res)=>{
    try{
     const listContacts= await Contact.find()
     res.status(200).send({msg: "contact list",listContacts})
    }catch(error){
        res.status(400).send({msg:"can not get all contacts",error})
    }
})
 router.delete('/:_id', async(req,res)=>{
try{
    const {_id}=req.params;
    await Contact.findOneAndDelete({_id})
    res.status(200).send({msg: "contact deleted"})
} catch(error){
    res.status(400).send({msg:"can not deleted contact",error}) 
}
 })
 router.put('/:_id',async(req,res)=>{
    try{
      const{_id}=req.params;
      const result=await Contact.updateOne({_id},{$set:{...req.body}})
      res.status(200).send({msg: "contact updated"})
    }catch(error){
        res.status(400).send({msg:"can not update contact",error}) 
    }
 })
router.get('/get_one/:_id',async(req,res)=>{
    try{
        const contactToGet=await Contact.findOne({_id:req.params._id})
        res.status(200).send({msg: "contact",contactToGet})    
    }catch(error){
        res.status(400).send({msg:"can not get this contact",error}) 
    }
})

 module.exports=router
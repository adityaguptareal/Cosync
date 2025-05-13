const {Router}=require('express');
const userRouter=Router();
const {customerSchema} =require('../Models/db');



userRouter.post("/signup",async function (req,res) {
    try{
        const {
            clerkId,
            email,
            firstName,
            lastName,
            phoneNumbers,
            imageUrl,
            role
          } = req.body;

          const newUser= await customerSchema.create({
              clerkId:clerkId,
              email:email,
              firstName:firstName,
              lastName:lastName,
              phoneNumbers:phoneNumbers,
              imageUrl:imageUrl,
              role:role
          }
          )
          await newUser.save();
          res.status(201).json({"message":"successfull created","status":true, "UserData":newUser});
        }catch(err){
            console.log("error");
            res.status(405).json({"message":"something went wrong", "status":false, "error":err});
    }
});


module.exports=userRouter;
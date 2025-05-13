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
            console.log(err);
            res.status(405).json({"message":"something went wrong", "status":false, "error":err});
    }
});

userRouter.delete("/delete/:clerkId", async function (req, res) {
    try {
        const { clerkId } = req.params;
        const deletedUser = await customerSchema.findOneAndDelete({ clerkId: clerkId });

        if (!deletedUser) {
            return res.status(404).json({
                "message": "User not found",
                "status": false
            });
        }

        res.status(200).json({
            "message": "User successfully deleted",
            "status": true,
            "deletedUser": deletedUser
        });
    } catch (err) {
        console.log("error in delete:", err);
        res.status(500).json({
            "message": "Something went wrong while deleting user",
            "status": false,
            "error": err
        });
    }
});


userRouter.put("/update/:clerkId", async function (req, res) {
    try {
        const { clerkId } = req.params;
        const updateData = req.body;

        const updatedUser = await customerSchema.findOneAndUpdate(
            { clerkId: clerkId },
            updateData,
            { new: true }
        );

        if (!updatedUser) {
            return res.status(404).json({
                "message": "User not found",
                "status": false
            });
        }

        res.status(200).json({
            "message": "User successfully updated",
            "status": true,
            "updatedUser": updatedUser
        });
    } catch (err) {
        console.log("error in update:", err);
        res.status(500).json({
            "message": "Something went wrong while updating user",
            "status": false,
            "error": err
        });
    }
});


module.exports=userRouter;
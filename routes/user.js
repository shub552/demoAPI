
const express = require('express');
const router = express.Router();
const User = require('../model/User');


//GET all the User
router.get('/', async (request,response)=>{
   try{
    const user = await User.find();
    response.json(user)
   }catch(error){
       response.json({message:error})
   }
});

//Submit A user
router.post('/', async (request,response)=>{
   const user = new User({
        firstname:request.body.firstname,
        lastname:request.body.lastname,
        email:request.body.email,
        salary:request.body.salary,
        age:request.body.age
   });
   try{
   const saveUser = await user.save()
   response.json(saveUser);
   }catch(error){
       response.json({message:error})
   }
});

//find specific User
router.get('/:userId', async (request,response)=>{
    try{
   const user = await User.findById(request.params.userId);
   response.json(user);
    }catch(error){
        response.json({message:error})
    }
});

//delet a specific user
router.delete('/:userId', async (request,response)=>{
    try{
   const removeUser = await User.remove({_id:request.params.userId});
    response.json(removeUser)
    }catch(error){
        response.json({message:error});
    }
});

//update User
router.patch('/:userId', async (request,response)=>{
    try{
    const updateUser = await User.updateOne({_id:request.params.userId},{ $set : {firstname:request.body.firstname}});
    response.json(updateUser);
    }catch(error){
        response.json({message:error})
    }
});

module.exports = router;
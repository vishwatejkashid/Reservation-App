import User from "../models/User.js"

export const createRoute = async(req , res , next) =>{
    const newUser = new User(req.body) ;
        try{
            const savedUser = await newUser.save();
            res.status(200).json(savedUser);
        }catch(err){
             next(err);
        }
}

export const updateRoute = async(req , res , next)=>{
    try{
        const updatedUser = await User.findByIdAndUpdate(req.params.id , {$set : req.body} , {new: true});
        res.status(200).json(updatedUser);
    }catch(err){
        next(err);
    }
} 

export const deleteRoute = async(req , res , next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("User is Deleted");
    }catch(err){
        next(err);
    }
}

export const getRoute = async(req, res , next)=>{
    try{
       const user = await User.findById(req.params.id);
       res.status(200).json(user);
    }catch(err){
        next(err);
    }
}

export const getAllRoute = async(req, res , next)=>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
         next(err);
    }
}
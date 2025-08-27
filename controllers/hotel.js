import Hotel from "../models/Hotel.js"

export const createRoute = async(req , res , next) =>{
    const newHotel = new Hotel(req.body) ;
        try{
            const savedHotel = await newHotel.save();
            res.status(200).json(savedHotel);
        }catch(err){
             next(err);
        }
}

export const updateRoute = async(req , res , next)=>{
    try{
        const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id , {$set : req.body} , {new: true});
        res.status(200).json(updatedHotel);
    }catch(err){
        next(err);
    }
} 

export const deleteRoute = async(req , res , next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel is Deleted");
    }catch(err){
        next(err);
    }
}

export const getRoute = async(req, res , next)=>{
    try{
       const hotel = await Hotel.findById(req.params.id);
       res.status(200).json(hotel);
    }catch(err){
        next(err);
    }
}

export const getAllRoute = async(req, res , next)=>{
    try{
        const hotels = await Hotel.find();
        res.status(200).json(hotels);
    }catch(err){
         next(err);
    }
}
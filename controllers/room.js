import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";
export const createRoom = async(req,res,next) =>{
    let hotelid = req.params.hotelid ;
    const newRoom = new Room(req.body);

    try{ 
        const savedRoom = await newRoom.save();
        await Hotel.findByIdAndUpdate(hotelid , {
            $push : {rooms : savedRoom._id},
        });

        res.status(200).json(savedRoom);
    }catch(err){
        next(err);
    }
}

export const updateRoom= async(req , res , next)=>{
    try{
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id , {$set : req.body} , {new: true});
        res.status(200).json(updatedRoom);
    }catch(err){
        next(err);
    }
} 

export const deleteRoom = async(req , res , next)=>{
    const hotelid = req.params.hotelid ;

    try{
        await Room.findByIdAndDelete(req.params.id);

        await Hotel.findByIdAndUpdate(hotelid , {
            $pull : {rooms : req.params.id}
        })
        res.status(200).json("Hotel is Deleted");
    }catch(err){
        next(err);
    }
}

export const getRoom = async(req, res , next)=>{
    try{
       const room = await Room.findById(req.params.id);
       res.status(200).json(room);
    }catch(err){
        next(err);
    }
}

export const getAllRooms = async(req, res , next)=>{
    try{
        const rooms = await Room.find();
        res.status(200).json(rooms);
    }catch(err){
         next(err);
    }
}
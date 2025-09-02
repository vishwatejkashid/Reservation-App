import express from "express";
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from "../controllers/room.js";
import { validateAdmin } from "../utils/validation.js";
const router = express();

//Create
router.post("/:hotelid" , validateAdmin , createRoom) ;
//Update
router.put("/:id" , validateAdmin , updateRoom) ;
//Delete
router.delete("/:id/:hotelid" , validateAdmin , deleteRoom) ;
//Create
router.get("/:id" , validateAdmin , getRoom) ;
//Get All
router.get("/" , validateAdmin , getAllRooms) ;
export default router;
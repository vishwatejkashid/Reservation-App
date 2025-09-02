import express from "express";
import {createHotel , updateHotel, deleteHotel, getHotel, getAllHotel  } from "../controllers/hotel.js"
import { validateAdmin } from "../utils/validation.js";
const router = express();

//Create 
router.post("/" ,validateAdmin, createHotel )
//Update
router.put("/:id" ,validateAdmin, updateHotel)
//Delete
router.delete("/:id" ,validateAdmin, deleteHotel)
//Get
router.get("/:id" , getHotel)
//Get All
router.get("/", getAllHotel)

export default router;
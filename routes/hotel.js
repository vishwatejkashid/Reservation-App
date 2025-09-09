import express from "express";
import {createHotel , updateHotel, deleteHotel, getHotel, getAllHotel, countByCity  } from "../controllers/hotel.js"
import { validateAdmin } from "../utils/validation.js";
const router = express();

//Create 
router.post("/" ,validateAdmin, createHotel )
//Update
router.put("/:id" ,validateAdmin, updateHotel)
//Delete
router.delete("/:id" ,validateAdmin, deleteHotel)
//Get
router.get("/find/:id" , getHotel)
//Get All
router.get("/", getAllHotel)

router.get("/countByCity", countByCity)
router.get("/countByType", getAllHotel)
export default router;
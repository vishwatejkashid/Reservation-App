import express from "express";
import {createRoute , updateRoute , deleteRoute , getRoute , getAllRoute } from "../controllers/hotel.js"
import { validateAdmin } from "../utils/validation.js";
const router = express();

//Create 
router.post("/" ,validateAdmin, createRoute )
//Update
router.put("/:id" ,validateAdmin, updateRoute)
//Delete
router.delete("/:id" ,validateAdmin, deleteRoute)
//Get
router.get("/:id" , getRoute)
//Get All
router.get("/", getAllRoute)

export default router;
import express from "express";
import {createRoute , updateRoute , deleteRoute , getRoute , getAllRoute } from "../controllers/hotel.js"
const router = express();

//Create 
router.post("/" , createRoute )
//Update
router.put("/:id" , updateRoute)
//Delete
router.delete("/:id" , deleteRoute)
//Get
router.get("/:id" , getRoute)
//Get All
router.get("/", getAllRoute)

export default router;
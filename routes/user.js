import express from "express";
import {updateRoute , deleteRoute , getRoute , getAllRoute } from "../controllers/users.js"
import {validateUser , validateAdmin} from "../utils/validation.js";

const router = express();

// router.get("/authentication" , validateAuth , (req,res,next)=>{
//     res.send("User Logged in successfully");
// })

//Update
router.put("/:id" , validateUser , updateRoute)
//Delete
router.delete("/:id" ,validateUser , deleteRoute)
//Get
router.get("/:id" ,validateUser , getRoute)
//Get All
router.get("/",validateAdmin , getAllRoute)
export default router;
import express from "express";
import { register } from "../controllers/auth.js";
const router = express();

router.put("/register" , register);
export default router;
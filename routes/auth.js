import express from "express";
import { login, register } from "../controllers/auth.js";
const router = express();

router.put("/register" , register);

router.post("/login" , login);

export default router;
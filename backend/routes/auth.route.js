import { Router } from "express";
import { authCheck, login, logout, signup } from "../controllers/auth.controller.js";
import { protectRoute } from "../middlewares/proctectRoute.middleware.js";

const authRoutes = Router()

authRoutes.post("/signup", signup)
authRoutes.post("/login", login)
authRoutes.post("/logout", logout)

authRoutes.get("/authCheck", protectRoute, authCheck)

export default authRoutes
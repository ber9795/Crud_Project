import express from "express";
import { getUsers, createUser, deleteUser, updatedUser } from "../controllers/Users";

const router = express.Router();

router.get("/users",getUsers);
router.post("/user",createUsers);
router.get("/user/:id",getUsers);
router.delete("/user/:id", deleteUser);
router.put("/user/:id", updateUser);

export default router;

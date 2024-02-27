import Express from "express";
import {getUsers} from "../controllers/users.js";

const router = Express.Router();

router.get("/", getUsers);

export default router;
import express from "express";
import { userContact } from "../controllers/userContact.controller.js";

const router = express.Router();

router.post('/',userContact);

export default router;
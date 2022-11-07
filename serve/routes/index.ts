import cors from "cors";
import express from "express";
import routerTarefa from "./tarefa";
import routerTipo from "./tipo";

const router = express.Router();
router.use(cors());
router.use(routerTarefa);
router.use(routerTipo);

export default router;

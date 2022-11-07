import express, { Express, Request, Response, NextFunction } from "express";
import Router from "express";
const router = Router();
import TipoModel from "../models/Tipo";
import tiposController from "../controller/TipoController";

const validateTipoId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tipo = await TipoModel.findByPk(req.params.tipoId);
  if (!tipo) {
    return res.status(404).json({ error: "tipo not found" });
  }
  next();
};

router.get("/tipos/relatorio/pdf", tiposController._generateRelator);
router.get("/tipos/relatorio/csv", tiposController._generateRelatorCSV);

router.get("/tipos", tiposController.index);

router.post("/tipos", tiposController.create);

router.get("/tipos/:tipoId", validateTipoId, tiposController.show);

router.put("/tipos/:tipoId", validateTipoId, tiposController.update);

router.delete("/tipos/:tipoId", validateTipoId, tiposController.delete);

export default router;

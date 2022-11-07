import express, { Express, Request, Response, NextFunction } from "express";
import Router from "express";
const router = Router();
import TarefaModel from "../models/Tarefa";
import tarefasController from "../controller/TarefaController";
import SendmailTransport from "nodemailer/lib/sendmail-transport";

const validateTarefaId = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const tarefa = await TarefaModel.findByPk(req.params.tarefaId);
  if (!tarefa) {
    return res.status(404).json({ error: "Tarefa not found" });
  }
  next();
};

router.get("/tarefas/relatorio/pdf", tarefasController._generateRelator);
router.get("/tarefas/relatorio/csv", tarefasController._generateRelatorCSV);

router.get("/tarefas", tarefasController.index);

router.post("/tarefas", tarefasController.create);

router.get("/tarefas/:tarefaId", validateTarefaId, tarefasController.show);

router.put("/tarefas/:tarefaId", validateTarefaId, tarefasController.update);

router.delete("/tarefas/:tarefaId", validateTarefaId, tarefasController.delete);

router.get("/email/:email", tarefasController._sendMail);

export default router;

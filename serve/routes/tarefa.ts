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

router.get("/tarefas/relatorio/pdf", TarefasController._generateRelator);
router.get("/tarefas/relatorio/csv", TarefasController._generateRelatorCSV);

router.get("/tarefas", TarefasController.index);

router.post("/Tarefas", TarefasController.create);

router.get("/Tarefas/:TarefaId", validateTarefaId, TarefasController.show);

router.put("/Tarefas/:userId", validateUserId, usersController.update);

router.delete("/users/:userId", validateUserId, usersController.delete);

router.get("/email/:email", usersController._sendMail);

export default router;

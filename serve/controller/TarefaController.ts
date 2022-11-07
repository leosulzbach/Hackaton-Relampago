import express, { Express, Request, Response, NextFunction } from "express";
import { DATEONLY, Op } from "sequelize";
import TarefaModel from "../models/Tarefa";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import pdf from "html-pdf";

class TarefasController {
  index = async (req: Request, res: Response, Next: NextFunction) => {
    const params: any = req.query;
    const limit: any = params.limit || 100;
    const page: any = params.page || 1;
    const offset: any = (page - 1) * limit;
    const sort: any = params.sort || "id";
    const order: any = params.order || "ASC";
    const where: any = {};

    if (params.data_vencimento) {
      where.data_vencimento = {
        [Op.iLike]: `%${params.data_vencimento}%`,
      };
    }

    if (params.descricao) {
      where.descricao = {
        [Op.iLike]: `%${params.descricao}%`,
      };
    }

    if (params.situacao) {
      where.situacao = {
        [Op.iLike]: `%${params.situacao}%`,
      };
    }

    if (params.prioridade) {
      where.prioridade = {
        [Op.iLike]: `%${params.prioridade}%`,
      };
    }

    const tarefas = await TarefaModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]],
    });
    res.json(users);
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._validateData(req.body, req.params.userId);
      const user = await UserModel.create(data);
      res.json(user);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };

  show = async (req: Request, res: Response, next: NextFunction) => {
    const user = await UserModel.findByPk(req.params.userId);
    res.json(user);
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: any = req.params.userId;
      const data = await this._validateData(req.body, id);
      await UserModel.update(data, {
        where: {
          id: id,
        },
      });
      res.json(await UserModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await UserModel.destroy({
      where: {
        id: req.params.userId,
      },
    });
    res.json({});
  };
  _validateData = async (data: any, id: any) => {
    const attributes = [
      "descricao",
      "data_vencimento",
      "email",
      "password",
      "birthDate",
    ];
    const user: any = {};
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      user[attribute] = data[attribute];
    }

    if (await this._checkIfEmailExists(user.email, id)) {
      throw new Error(
        `The user with mail address "${user.email}" already exists.`
      );
    }

    return user;
  };

  _checkIfEmailExists = async (email: string, id: Number) => {
    const where: any = {
      email: email,
    };

    if (id) {
      where.id = { [Op.ne]: id }; // WHERE id != id
    }

    const count = await UserModel.count({
      where: where,
    });

    return count > 0;
  };

  _sendMail = async (req: Request, res: Response, next: NextFunction) => {
    let email_user = "carlaselt@gmail.com";
    let email_password = "12345";
    let email_to = req.params.email;
    let email_subject = "Welcome to Drugs Store System";
    let email_content =
      "Welcome, you have been registered in the  Drugs Store System!";
    let email_html =
      "Só um e-mail de <i>exemplo</i>, com <b>html</b>, e acentuação.";

    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: email_user,
        pass: email_password,
      },
    });

    var mailOptions = {
      from: email_user,
      to: email_to,
      subject: email_subject,
      text: email_content,
    };
    //transporter.sendMail(mailOptions: Mail.Options, callback: (err: Error | null, info: SMTPTransport.SentMessageInfo) => void{
    transporter.sendMail(
      mailOptions,
      (error: Error | null, info: SMTPTransport.SentMessageInfo) => {
        if (error) {
          console.log("Erro on sendMail:" + error);
        } else {
          console.log("Mail sent!");
        }
      }
    );
  };

  _generateRelator = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let users = await UserModel.findAll();
    let html = `<table border="1" style="width:100%">
    <h1>Relatório de Usuários do Sistema</h1>
    <h4>Generated at: ${new Date()}</h4>
    <tr>
    <th>ID</th>
    <th>Nome</th>
    <th>Cargo</th>
    <th>Email</th>
    <th>Data de nascimento</th>
    </tr>`;
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      html += `<tr>
      <td>${user.id}</td>
      <td>${user.name}</td>
      <td>${user.office}</td>
      <td>${user.email}</td>
      <td>${user.birthDate}</td>
      </tr>`;
    }
    html += `</table>`;

    const options: pdf.CreateOptions = {
      type: "pdf",
      format: "A4",
      orientation: "portrait",
    };

    pdf.create(html, options).toBuffer((err, buffer) => {
      if (err) {
        return res.status(500).json(err);
      }
      res.end(buffer);
    });
  };
  _generateRelatorCSV = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let users = await UserModel.findAll();

    let csv: string = `ID;Username;Office;Email
    `;
    for (let i = 0; i < users.length; i++) {
      let user = users[i];
      csv += `${user.id};${user.name};${user.office};${user.email}
      `;
    }
    res.header("Content-Type", "text/csv");
    res.header("Content-Disposition", "attachment; filename=users.csv");
    res.header("Pragma", "attachment; no-cache");
    res.header("Expires", "0");
    res.send(csv);
  };
}

export default new TarefasController();

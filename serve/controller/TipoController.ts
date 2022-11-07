import express, { Express, Request, Response, NextFunction } from "express";
import { DATEONLY, Op } from "sequelize";
import TipoModel from "../models/Tipo";
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

    if (params.descricao) {
      where.descricao = {
        [Op.iLike]: `%${params.descricao}%`,
      };
    }

    const tipos = await TipoModel.findAll({
      where: where,
      limit: limit,
      offset: offset,
      order: [[sort, order]],
    });
    res.json(tipos);
  };

  create = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await this._validateData(req.body, req.params.tipoId);
      const tipo = await TipoModel.create(data);
      res.json(tipo);
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };

  show = async (req: Request, res: Response, next: NextFunction) => {
    const tipo = await TipoModel.findByPk(req.params.tipoId);
    res.json(tipo);
  };

  update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const id: any = req.params.tipoId;
      const data = await this._validateData(req.body, id);
      await TipoModel.update(data, {
        where: {
          id: id,
        },
      });
      res.json(await TipoModel.findByPk(id));
    } catch (error) {
      res.status(400).json({ error: (error as Error).message });
    }
  };

  delete = async (req: Request, res: Response, next: NextFunction) => {
    await TipoModel.destroy({
      where: {
        id: req.params.tipoId,
      },
    });
    res.json({});
  };
  _validateData = async (data: any, id: any) => {
    const attributes = ["descricao"];
    const tipo: any = {};
    for (const attribute of attributes) {
      if (!data[attribute]) {
        throw new Error(`The attribute "${attribute}" is required.`);
      }
      tipo[attribute] = data[attribute];
    }

    return tipo;
  };

  _generateRelator = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    let tipos = await TipoModel.findAll();
    let html = `<table border="1" style="width:100%">
    <h1>Relatório de tipos</h1>
    <h4>Generated at: ${new Date()}</h4>
    <tr>
    <th>ID</th>
    <th>Descrição</th>
    </tr>`;

    for (let i = 0; i < tipos.length; i++) {
      let tipo = tipos[i];
      html += `<tr>
      <td>${tipo.id}</td>
      <td>${tipo.descricao}</td>
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
    let tipos = await TipoModel.findAll();

    let csv: string = `ID;Descrição;
    `;
    for (let i = 0; i < tipos.length; i++) {
      let tipo = tipos[i];
      csv += `${tipo.id};${tipo.descricao};
      `;
    }
    res.header("Content-Type", "text/csv");
    res.header("Content-Disposition", "attachment; filename=tipos.csv");
    res.header("Pragma", "attachment; no-cache");
    res.header("Expires", "0");
    res.send(csv);
  };
}

export default new TarefasController();

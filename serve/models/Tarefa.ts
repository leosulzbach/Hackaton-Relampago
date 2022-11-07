import { DataTypes, DateOnlyDataType, Model } from "sequelize";
import db from "../db";
import Tipo from "./Tipo";

class Tarefa extends Model {
  declare id: number;
  declare data_vencimento: DateOnlyDataType;
  declare descricao: string;
  declare situacao: string;
  declare prioridade: number;
}
Tarefa.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    data_vencimento: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    situacao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
    prioridade: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Tarefas",
    modelName: "Tarefa",
  }
);
Tarefa.belongsTo(Tipo);
Tipo.hasMany(Tarefa);

export default Tarefa;

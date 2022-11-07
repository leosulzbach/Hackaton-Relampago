import { DataTypes, DateOnlyDataType, Model } from "sequelize";
import db from "../db";

class Tipo extends Model {
  declare id: number;
  declare descricao: string;
}
Tipo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    descricao: {
      type: DataTypes.STRING(45),
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "Tipos",
    modelName: "Tipo",
  }
);

export default Tipo;

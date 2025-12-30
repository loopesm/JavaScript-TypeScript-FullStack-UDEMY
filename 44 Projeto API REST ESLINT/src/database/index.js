import { Sequelize } from 'sequelize';
import dbConfig from '../config/database.js';
import Aluno from '../models/AlunoModels.js';

const models = [Aluno];

const connection = new Sequelize(dbConfig);

models.forEach((model) => model.init(connection));

export { connection };
export default models;

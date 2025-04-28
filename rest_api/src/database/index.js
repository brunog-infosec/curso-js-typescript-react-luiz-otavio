import Sequelize from 'sequelize';
import databaseconfig from '../config/database';
import Aluno from '../models/Aluno';

// Array com todos Models
const models = [Aluno];
const connection = new Sequelize(databaseconfig);

models.forEach((model) => model.init(connection));

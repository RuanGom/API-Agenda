import 'dotenv/config';
import cors from 'cors';
import express from 'express';

import agendaController from './controller/agendaController.js';

let servidor = express();
servidor.use(cors());
servidor.use(express.json());

servidor.use(agendaController);

servidor.listen(process.env.PORT, () => console.log('API subiu: ' + process.env.PORT));
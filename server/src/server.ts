import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';

const app = express();

//Para testes em desenvolvimento usar apenas o parametro cors() que aceita qualquer requisição
//Para o ambiente de produção no lugar de cors() utilizar o parâmetro origin: 'dominio_que_pode_acessar'
app.use(cors());
app.use(express.json());
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.listen(3333);

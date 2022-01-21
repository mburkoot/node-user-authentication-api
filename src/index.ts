
import express, { Request, Response, NextFunction} from 'express';
import statusRoute from './routes/status.route';
import userRoute from './routes/users.route';

const app = express();

//Configuração da aplicação
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

//Configurações de Rotas
app.use(statusRoute);
app.use(userRoute);

//Inicialização do servidor (Qual porta)
app.listen(3000, () => {
    console.log('Aplicação executando na porta 3000!');
});
import express, {Request, Response} from 'express';
import path from 'path';
import dotenv from 'dotenv';
import apiRoutes from './routes/api'
import cors from 'cors'
import mongoConnect from './database/mongo';



dotenv.config();

mongoConnect();

const server = express();

server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));


server.use(cors({
  // apenas os sites da origin tem acesso a API
  origin: '*',
  // libera apenas os metodos passados na array
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

server.use('/api', apiRoutes);



server.use((req: Request, res: Response) => {
  res.status(404);
  res.json({ error: "Endpoint not find" });
})

server.listen(process.env.PORT);
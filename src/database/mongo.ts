import { connect } from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const mongoConnect = async () => {
  try{
    console.log('Conectando ao MongoDB...');
    await connect(process.env.MONGO_URL as string)
    console.log('MongoDB conectado com sucesso!')
  }
  catch(err) {
    console.log('MongoDB error conection...', err)
  }
}

export default mongoConnect
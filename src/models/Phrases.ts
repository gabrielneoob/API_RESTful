import { Schema, Model, model, connection } from "mongoose";
import { PhrasesType } from "../types/Phrases.type";

export const schema = new Schema<Omit<PhrasesType, '_id'>>({
  author: {type: String, required: true},
  txt: {type: String, required: true}
})

const modelName = 'Phrases';

 export default (connection && connection.models[modelName]) ?
 (connection.models[modelName] as Model<Omit<PhrasesType, '_id'>>) : model<Omit<PhrasesType, '_id'>>(modelName, schema)
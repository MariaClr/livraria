import mongoose from "mongoose";


export default async function conectaNaDatabase(){
    try {
        await mongoose.connect(process.env.DB_CONNECTION_STRING);
        console.log("Conectado ao banco de dados 'livraria'");
        return mongoose.connection;
    } catch (error) {
        throw error(error, "erro ao conectar ao banco de dados")
        console.error("Erro ao conectar ao banco de dados", error);
    }
};
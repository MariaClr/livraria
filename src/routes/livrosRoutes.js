import express from "express";
import LivroController from "../controller/livroController.js"

const routes = express.Router();

routes.get("/livros", await LivroController.listarLivros);
routes.get("/livros/:id", await LivroController.listarLivroPorId);
routes.post("/livros", await LivroController.cadastrarLivro);
routes.put("/livros/:id", await LivroController.atualizarLivro);
routes.delete("/livro/:id", await LivroController.removerLivro);
routes.get("/teste", await LivroController.teste)



export default routes;

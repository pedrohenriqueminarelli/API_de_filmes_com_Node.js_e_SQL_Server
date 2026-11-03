import FilmeController from '../controllers/filmeController.js';
import express from 'express';

const routes = express.Router();

routes.get("/filmes", FilmeController.buscarTodos);
routes.get("/filmes/:id", FilmeController.pegarFilmePorId);
routes.post("/filmes", FilmeController.inserirFilme);
routes.put("/filmes/:id", FilmeController.atualizarDadosDoFilme);
routes.delete("/filmes/:id", FilmeController.deletarFilmePorId);

export default routes;
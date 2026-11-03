import CategoriaController from '../controllers/categoriaController.js';
import express from 'express';

const routes = express.Router();

routes.get("/categorias", CategoriaController.buscarTodas)
routes.post("/categorias", CategoriaController.inserirCategoria)

export default routes; 
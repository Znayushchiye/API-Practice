import express from "express";
import getAll from "./controllers/getAll.js";

const Router = express.Router();

Router.get('/TodoList', getAll);
Router.post('/TodoList/:id', )
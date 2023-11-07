import express from "express";

import todosRouter from "./todos.router";

const api = express.Router();

api.use("/todos", todosRouter);

export default api;

import express from "express";

import { httpGetTodos, httpAddTodo } from "./todos.controller";

const todosRouter = express.Router();

todosRouter.get("/", httpGetTodos);
todosRouter.post("/", httpAddTodo);

export default todosRouter;

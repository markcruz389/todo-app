import express from "express";

import {
    httpGetTodos,
    httpAddTodo,
    httpDeleteTodo,
    httpMarkTodoAsCompleted,
} from "./todos.controller";

const todosRouter = express.Router();

todosRouter.get("/", httpGetTodos);
todosRouter.post("/", httpAddTodo);
todosRouter.delete("/:id", httpDeleteTodo);
todosRouter.post("/complete", httpMarkTodoAsCompleted);

export default todosRouter;

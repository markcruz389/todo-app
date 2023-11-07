import { Request, Response } from "express";

import { getTodos, addTodo } from "../models/todos.model";

const httpGetTodos = async (req: Request, res: Response) => {
    const todos = await getTodos();

    return res.status(200).json(todos);
};

const httpAddTodo = async (req: Request, res: Response) => {
    const { todo, deadline } = req.body;

    const newTodo = await addTodo(todo, deadline);

    return res.status(201).json(newTodo);
};

export { httpGetTodos, httpAddTodo };

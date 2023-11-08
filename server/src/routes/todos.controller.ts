import { Request, Response } from "express";

import {
    getTodos,
    addTodo,
    deleteTodo,
    markTodoAsCompleted,
} from "../models/todos.model";

const httpGetTodos = async (req: Request, res: Response) => {
    const todos = await getTodos();

    return res.status(200).json(todos);
};

const httpAddTodo = async (req: Request, res: Response) => {
    const { todo, deadline } = req.body;
    const newTodo = await addTodo(todo, deadline);

    return res.status(201).json(newTodo);
};

const httpDeleteTodo = async (req: Request, res: Response) => {
    const id = req.params.id;
    const todo = await deleteTodo(id);

    return res.status(200).json(todo);
};

const httpMarkTodoAsCompleted = async (req: Request, res: Response) => {
    const { id } = req.body;
    const todo = await markTodoAsCompleted(id);

    return res.status(200).json(todo);
};

export { httpGetTodos, httpAddTodo, httpDeleteTodo, httpMarkTodoAsCompleted };

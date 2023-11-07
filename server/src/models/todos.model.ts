import todos, { ITodo } from "./todos.schema";

const getTodos = async () => {
    return await todos.find({}, { __v: 0 });
};

const addTodo = async (
    todo: string,
    deadline: Date | undefined
): Promise<ITodo> => {
    const data = { todo, ...(deadline && { deadline: new Date(deadline) }) };
    const newTodo = await todos.create(data);
    return { id: newTodo.id, todo, deadline };
};

export { getTodos, addTodo };

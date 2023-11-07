import todos, { ITodo } from "./todos.schema";

const getTodos = async () => {
    return await todos.find({}, { __v: 0 });
};

const addTodo = async (todo: string, deadline: Date): Promise<ITodo> => {
    const newTodo = await todos.create({ todo, deadline });
    return { id: newTodo.id, todo, deadline };
};

export { getTodos, addTodo };

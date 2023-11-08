import todos, { ITodo } from "./todos.schema";

const getTodos = async (): Promise<Array<ITodo>> => {
    return await todos
        .find({ isDeleted: false }, { __v: 0 })
        .sort({ createdDate: "desc" });
};

const addTodo = async (todo: string, deadline?: Date): Promise<ITodo> => {
    const newTodo = await todos.create({
        todo,
        deadline: deadline || null,
        completedDate: null,
        createdDate: new Date(),
        isDeleted: false,
    });

    return newTodo;
};

const deleteTodo = async (_id: string): Promise<ITodo> => {
    const todo = await todos.findByIdAndUpdate(
        { _id },
        { isDeleted: true },
        { new: true }
    );

    return todo as ITodo;
};

const markTodoAsCompleted = async (_id: string): Promise<ITodo> => {
    const todo = await todos.findByIdAndUpdate(
        { _id },
        { completedDate: new Date() },
        { new: true }
    );

    return todo as ITodo;
};

export { getTodos, addTodo, deleteTodo, markTodoAsCompleted };

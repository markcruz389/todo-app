import { ChangeEvent, MouseEvent, useContext } from "react";

import Checkbox from "../../../../components/Form/Checkbox";

import { ITodo } from "../../../../types";
import {
    TodosContext,
    TodosContextType,
} from "../../../../contexts/TodosContext";

type Props = {
    todo: ITodo;
};

const completeTodo = async (id: string) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/todos/complete`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ id }),
            }
        );
        const data = (await response.json()) as ITodo;

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const deleteTodo = async (id: string) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/todos/${id}`,
            {
                headers: {
                    Accept: "application/json",
                },
                method: "DELETE",
            }
        );
        const data = (await response.json()) as ITodo;

        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

const TodoItem = ({ todo }: Props) => {
    const todoId = todo.id;
    const completed = todo.completedDate !== null;
    const completedDate = completed
        ? new Date(todo.completedDate as string).toDateString()
        : "N/A";
    const label = completed ? "Completed" : "Mark as completed";
    const deadline = todo.deadline
        ? new Date(todo.deadline as string).toDateString()
        : "N/A";

    const { setTodos } = useContext(TodosContext) as TodosContextType;

    const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
        if (!event.target.checked) {
            return;
        }

        const completedTodo = await completeTodo(todoId);
        if (!completedTodo) {
            alert("Failed completing todo");
            return;
        }

        setTodos((prev) =>
            prev.map((todo) =>
                todo.id === completedTodo.id ? completedTodo : todo
            )
        );
    };

    const handleDelete = async (_: MouseEvent<HTMLButtonElement>) => {
        const deletedTodo = await deleteTodo(todoId);

        if (!deletedTodo) {
            alert("Failed completing todo");
            return;
        }

        setTodos((prev) => prev.filter((todo) => todo.id !== deletedTodo.id));
    };

    return (
        <li className="p-2 m-1 border-2 md:grid md:grid-cols-2 md:items-center ">
            <div>
                <p>
                    <strong>Todo: </strong>
                    {todo.todo}
                </p>
                <p>
                    <strong>Deadline: </strong>
                    {deadline}
                </p>
                <p>
                    <strong>Completed date: </strong>
                    {completedDate}
                </p>
            </div>

            <div>
                <div>
                    <Checkbox
                        checked={completed}
                        disabled={completed}
                        label={label}
                        handleChange={handleChange}
                    />
                </div>
                {!completed && (
                    <div>
                        <button
                            type="button"
                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                            onClick={handleDelete}
                        >
                            Delete
                        </button>
                    </div>
                )}
            </div>
        </li>
    );
};

export default TodoItem;

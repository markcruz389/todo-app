import { useState, useContext, FormEvent } from "react";

import TextInput from "../../../components/Form/TextInput";
import DateInput from "../../../components/Form/DateInput";

import { TodosContext, TodosContextType } from "../../../contexts/TodosContext";
import { ITodo } from "../../../types";

type TodoFormObject = {
    todo: "";
    deadline: string;
};

const addTodo = async (todo: TodoFormObject) => {
    try {
        const response = await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/todos`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify(todo),
            }
        );

        return (await response.json()) as ITodo;
    } catch (error) {
        alert(`Failed to create todo`);
    }
};

const TodoForm = () => {
    const { setTodos } = useContext(TodosContext) as TodosContextType;
    const [formInput, setFormInput] = useState<TodoFormObject>({
        todo: "",
        deadline: "",
    });
    const [error, setError] = useState(false);

    const handleChange = (name: string, value: string) => {
        setFormInput({ ...formInput, [name]: value });
    };

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (!formInput.todo.trim()) {
            setError(true);
            return;
        }

        const newTodo = await addTodo(formInput);
        if (!newTodo) {
            return;
        }

        setTodos((prev) => [...prev, newTodo]);
    };

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <TextInput
                label="Todo"
                name="todo"
                value={formInput.todo}
                error={error}
                handleChange={handleChange}
            />
            <DateInput
                label="Deadline"
                name="deadline"
                value={formInput.deadline}
                handleChange={handleChange}
            />

            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add
            </button>
        </form>
    );
};

export default TodoForm;

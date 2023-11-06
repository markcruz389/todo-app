import { useState, useContext, FormEvent } from "react";

import TextInput from "../../../components/Form/TextInput";
import DateInput from "../../../components/Form/DateInput";

import { ITodo } from "../types";
import { TodosContext, TodosContextType } from "../TodosContext";

const TodoForm = () => {
    const { setTodos } = useContext(TodosContext) as TodosContextType;
    const [formInput, setFormInput] = useState<ITodo>({
        todo: "",
        deadline: undefined,
        completed: false,
    });
    const [error, setError] = useState(false);

    const handleChange = (name: string, value: string) => {
        setFormInput({ ...formInput, [name]: value });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        if (!formInput.todo.trim()) {
            setError(true);
            return;
        }

        setTodos((prev) => [...prev, formInput]);
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

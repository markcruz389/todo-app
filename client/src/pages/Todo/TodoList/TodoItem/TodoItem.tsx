import { useContext } from "react";

import Checkbox from "../../../../components/Form/Checkbox";

import { ITodo } from "../../types";
import { TodosContext, TodosContextType } from "../../TodosContext";

type Props = {
    index: number;
    todo: ITodo;
};

const TodoItem = ({ index, todo }: Props) => {
    const { setTodos } = useContext(TodosContext) as TodosContextType;

    const handleChange = (checked: boolean) => {
        if (!checked) return;

        setTodos((prev) =>
            prev.map((todo, i) =>
                i === index ? { ...todo, completed: true } : todo
            )
        );
    };

    return (
        <li>
            <span>{index + 1}</span>
            {todo.todo} - {todo.deadline}
            <Checkbox
                label="Mark as completed"
                handleChange={handleChange}
                disabled={todo.completed}
            />
        </li>
    );
};

export default TodoItem;

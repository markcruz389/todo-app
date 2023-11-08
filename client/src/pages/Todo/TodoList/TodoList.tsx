import { useContext } from "react";

import TodoItem from "./TodoItem/TodoItem";

import { TodosContext, TodosContextType } from "../../../contexts/TodosContext";

const TodoList = () => {
    const { todos } = useContext(TodosContext) as TodosContextType;

    return (
        <ol>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ol>
    );
};

export default TodoList;

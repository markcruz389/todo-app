import { useContext } from "react";

import TodoItem from "./TodoItem/TodoItem";

import { TodosContext, TodosContextType } from "../TodosContext";

const TodoList = () => {
    const { todos } = useContext(TodosContext) as TodosContextType;

    return (
        <ol>
            {todos.map((todo, index) => (
                <TodoItem key={index} index={index} todo={todo} />
            ))}
        </ol>
    );
};

export default TodoList;

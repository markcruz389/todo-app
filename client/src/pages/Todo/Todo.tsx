import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

import TodosProvider from "../../contexts/TodosContext";

function Todo() {
    return (
        <div className="w-1/2">
            <TodosProvider>
                <TodoForm />
                <TodoList />
            </TodosProvider>
        </div>
    );
}

export default Todo;

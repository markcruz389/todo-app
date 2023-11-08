import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

import TodosProvider from "../../contexts/TodosContext";

function Todo() {
    return (
        <div className="h-screen p-10 grid grid-cols-2 gap-5 items-center">
            <TodosProvider>
                <div className="p-[100px]">
                    <TodoForm />
                </div>
                <div>
                    <TodoList />
                </div>
            </TodosProvider>
        </div>
    );
}

export default Todo;

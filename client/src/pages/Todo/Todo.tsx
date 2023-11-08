import TodoForm from "./TodoForm/TodoForm";
import TodoList from "./TodoList/TodoList";

import TodosProvider from "../../contexts/TodosContext";

function Todo() {
    return (
        <div className="h-screen items-center md:p-10 md:grid md:grid-cols-2 md:gap-5 ">
            <TodosProvider>
                <div className="p-5 md:p-[75px]">
                    <TodoForm />
                </div>
                <div className="p-5 md:p-0">
                    <TodoList />
                </div>
            </TodosProvider>
        </div>
    );
}

export default Todo;

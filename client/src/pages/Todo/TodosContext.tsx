import {
    createContext,
    useState,
    PropsWithChildren,
    Dispatch,
    SetStateAction,
} from "react";

import { ITodo } from "./types";

export type TodosContextType = {
    todos: ITodo[];
    setTodos: Dispatch<SetStateAction<ITodo[]>>;
};

export const TodosContext = createContext<TodosContextType | null>(null);

const TodosProvider = ({ children }: PropsWithChildren) => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    return (
        <TodosContext.Provider value={{ todos, setTodos }}>
            {children}
        </TodosContext.Provider>
    );
};

export default TodosProvider;

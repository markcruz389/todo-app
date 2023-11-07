import { useEffect, useState } from "react";
import { ITodo } from "../types";

const useTodos = () => {
    const [todos, setTodos] = useState<Array<ITodo>>([]);

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch(
                    `${process.env.REACT_APP_API_BASE_URL}/todos`
                );
                const data = (await response.json()) as ITodo[];

                setTodos(data);
            } catch (error) {
                alert(`Failed fetching todos - ${error}`);
            }
        };

        fetchTodos();
    }, []);

    return { todos, setTodos };
};

export default useTodos;

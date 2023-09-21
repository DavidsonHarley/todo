import { FC } from "react";
import { TodoItem } from "./TodoItem";

import { useAppSelector } from "../types/hook";

interface ITodoListProps {
}

const TodoList: FC<ITodoListProps> = (props) => {
    const todos = useAppSelector(state => state.todos.list)

    return (
        <ul>
            {
                todos.map(todo => (
                <TodoItem 
                key={todo.id} 
                {...todo}
                />)
            )}
        </ul>
    ); 
}

export {TodoList}
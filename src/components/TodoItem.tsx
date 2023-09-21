import { FC } from "react";
import {ITodo} from '../types/data';

import { useAppDispatch } from "../types/hook";
import { toggleStatus, deleteTodo } from "../store/todoSlice";


interface ITodoItem extends ITodo {
    
}


const TodoItem: FC<ITodoItem> = (props) => {
    const {id, title, completed} = props;

    const dispatch = useAppDispatch();
    
    return (
        <li>
            <input 
            type="checkbox" 
            checked={completed}
            onChange={() => dispatch(toggleStatus(id))}
            />
            <span>{title}</span>
            <button onClick={() => dispatch(deleteTodo(id))} >x</button>
        </li>
    )
}

export {TodoItem}
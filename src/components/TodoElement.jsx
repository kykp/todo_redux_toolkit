import React from 'react'
import { toggleCompletedTodo, removeTodo } from "../features/todo/todoSlice";
import { useDispatch } from "react-redux";

export const TodoElement = ({data}) => {
  const dispatch = useDispatch();

  const toggleCompleted = (id) => {
    dispatch(toggleCompletedTodo(id))
  }

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id))
  }

  return (
       <li  className={data.completed? "todo-li done-text" : "todo-li"}>
        <button 
        className={data.completed? "todo-list-completed-button completed" : "todo-list-completed-button"}
        onClick={() => toggleCompleted(data.id)}
        ></button>
        <span onClick={() => toggleCompleted(data.id)}>{data.text}</span>
        <button
          onClick={() => handleRemoveTodo(data.id)}
         className="delete-btn">x</button>
      </li>
  )
}

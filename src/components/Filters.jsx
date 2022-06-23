import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {  filterBy, clearCompletedTodo } from "../features/todo/todoSlice";
import {filters} from "../features/todo/todoSlice"


export const Filters = () => {

    const todo = useSelector((state) => state.todo.todos);
    const dispatch = useDispatch();

    const handleClearCompletedTodo = () => {
        dispatch(clearCompletedTodo());
      }
  return (
    <>
    <div className="todo__form-footer">
    <small>{todo.length} items left</small>
    <div className="todo__form-footer-middle">
      <small onClick={() => dispatch(filterBy(filters.ALL))} >all</small>
      <small onClick={() => dispatch(filterBy(filters.COMPLETED))}>active</small>
      <small onClick={() => dispatch(filterBy(filters.NOT_COMPLETED))}>completed</small>
    </div>
    <small onClick={handleClearCompletedTodo}>clear completed</small>
</div>
<div className="todo__form-footer mobile-version">
      <small >all</small>
      <small>active</small>
      <small>completed</small>
</div>
</>
  )
}

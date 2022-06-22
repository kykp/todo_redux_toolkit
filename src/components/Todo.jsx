import {TodoElement} from "./TodoElement"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

var _ = require('lodash');

export const Todo = () => {
  const [text, setText] = useState("");
  let uniqueId = _.uniqueId();
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.todos);

  const handleSubmit =(e)=> {
    e.preventDefault();
    const simpleTodo = {
      id: uniqueId,
      text: text,
      completed: false,
    }
    if(text.length> 0) {
      dispatch(addTodo(simpleTodo));
    }
    setText("")
  }

  
  return (
    <section className='todo root__todoo'>
      <div className="todo__container">
        <form  onSubmit={handleSubmit} className="todo__form">
          <input 
          onChange={(e) => setText(e.target.value)}
          className="todo__form-input"
          placeholder="Create a new todo.."
          type="text"
          value={text}/>
          <input type="submit" hidden />
      </form>

        <ul className="todo-list">
        {todo?.map(el=> (<TodoElement key={el.id} data={el}/>))}
        </ul>

        <div className="todo__form-footer">
              <small>{todo.length} items left</small>
              <div className="todo__form-footer-middle">
                <small >all</small>
                <small>active</small>
                <small>completed</small>
              </div>
              <small>clear completed</small>
        </div>
        <div className="todo__form-footer mobile-version">
                <small >all</small>
                <small>active</small>
                <small>completed</small>
        </div>
      </div>
     
    </section>
  )
}

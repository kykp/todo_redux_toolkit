import {TodoElement} from "./TodoElement"
import { Filters } from "./Filters";
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import {filters} from "../features/todo/todoSlice"

var _ = require('lodash');

export const Todo = () => {
  const [text, setText] = useState("");
  let uniqueId = _.uniqueId();
  const dispatch = useDispatch();

  const todo = useSelector((state) => state.todo.todos);
  const filter = useSelector((state) => state.todo.filterBy);

  const filteredTodo = () => {
    if(filter === filters.COMPLETED) {
      return todo.filter(todo => !todo.completed);
    }
    if(filter === filters.NOT_COMPLETED) {
      return todo.filter(todo => todo.completed)
    }
    // if none of above return all todos
    return todo;
  }
  
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
        {filteredTodo()?.map(el=> (<TodoElement key={el.id} data={el}/>))}
        </ul>
        <Filters/>
      </div>
    </section>
  )
}

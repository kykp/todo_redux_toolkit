import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const middleWare = (store) => (next) => (action) => {
  const state = JSON.stringify(action.payload);
  localStorage.setItem("persistantState", state);
  return next(action);
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    toggleCompletedTodo: (state, action) => {
      const togledItem = state.todos.find((el) => el.id === action.payload);
      togledItem.completed = !togledItem.completed;
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    clearCompletedTodo: (state, action) => {
      console.log(action);
    },
  },
});

export const { addTodo, toggleCompletedTodo, removeTodo, clearCompletedTodo } =
  todoSlice.actions;
export default todoSlice.reducer;

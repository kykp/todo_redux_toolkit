import { createSlice } from "@reduxjs/toolkit";

export const filters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  NOT_COMPLETED: "NOT_COMPLETED",
};

export const middleWare = (store) => (next) => (action) => {
  const state = JSON.stringify(action.payload);
  localStorage.setItem("persistantState", state);
  return next(action);
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [],
    filterBy: filters.ALL,
  },
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
      state.todos = state.todos.filter((todo) => todo.completed === false);
    },
    filterBy(state, action) {
      state.filterBy = action.payload;
    },
  },
});

export const {
  addTodo,
  toggleCompletedTodo,
  removeTodo,
  clearCompletedTodo,
  filterBy,
} = todoSlice.actions;
export default todoSlice.reducer;

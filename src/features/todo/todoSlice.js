import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

export const filters = {
  ALL: "ALL",
  COMPLETED: "COMPLETED",
  NOT_COMPLETED: "NOT_COMPLETED",
};

const testArray = [];

const getTodoListfromLocalStorage = () => {
  const localStorageTodo = window.localStorage.getItem("todoList");
  if (localStorageTodo) return JSON.parse(localStorageTodo);
  window.localStorage.setItem("todoList", JSON.stringify([]));
  return [];
};

// export const middleWare = (store) => (next) => (action) => {
//   const state = JSON.stringify(action.payload);
//   localStorage.setItem("persistantState", state);
//   return next(action);
// };

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    todos: getTodoListfromLocalStorage() || [],
    filterBy: filters.ALL,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
      testArray.push({ ...action.payload });
      window.localStorage.setItem("todoList", JSON.stringify(testArray));
    },
    toggleCompletedTodo: (state, action) => {
      const togledItem = state.todos.find((el) => el.id === action.payload);
      togledItem.completed = !togledItem.completed;

      const todoList = JSON.parse(window.localStorage.getItem("todoList"));
      const newLocal = todoList.map((todo) => {
        if (todo.id === action.payload) {
          todo.completed = !todo.completed;
          return todo;
        } else {
          return todo;
        }
      });
      window.localStorage.setItem("todoList", JSON.stringify(newLocal));
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((el) => el.id !== action.payload);

      const todoList = JSON.parse(window.localStorage.getItem("todoList"));
      const newLocal = todoList.filter((el) => el.id !== action.payload);
      window.localStorage.setItem("todoList", JSON.stringify(newLocal));
    },

    clearCompletedTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.completed === false);

      const todoList = JSON.parse(window.localStorage.getItem("todoList"));
      const newLocal = todoList.filter((todo) => todo.completed === false);
      window.localStorage.setItem("todoList", JSON.stringify(newLocal));
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

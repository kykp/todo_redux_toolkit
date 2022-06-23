import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todo/todoSlice";
// import { middleWare } from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: {
    todo: todoSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(middleWare),
});

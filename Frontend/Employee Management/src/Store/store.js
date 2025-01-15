import { configureStore } from "@reduxjs/toolkit";
import departmentsReducer from "../Store/departments";

export const store = configureStore({
  reducer: {
    department: departmentsReducer,
  },
});

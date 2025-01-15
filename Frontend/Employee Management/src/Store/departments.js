import { createSlice } from "@reduxjs/toolkit";

const departmentsSlice = createSlice({
  name: "department",
  initialState: {
    departments: [],
  },
  reducers: {
    getDepartments: (state, action) => {
      state.departments = action.payload;
    },
  },
});

export const { getDepartments } = departmentsSlice.actions;
export default departmentsSlice.reducer;

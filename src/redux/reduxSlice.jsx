import { createSlice } from "@reduxjs/toolkit";

const reduxSlice = createSlice({
     name: "users",
     initialState: { value: [] },
     reducers: {
          getUsers: (state, action) => {
               state.value.push(action.payload);
          },
     },
});

export const { getUsers } = reduxSlice.actions;
export default reduxSlice.reducer;

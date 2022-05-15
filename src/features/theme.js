import { createSlice } from "@reduxjs/toolkit";

const initialValueState = '';

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: initialValueState },
  reducers: {
  changeColor: (state, action) => {
    state.value = action.payload
  }
  },
});

export const { changeColor } = themeSlice.actions;
export default themeSlice.reducer;

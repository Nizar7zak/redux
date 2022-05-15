import { createSlice } from "@reduxjs/toolkit";

const initialValueState = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialValueState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialValueState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;

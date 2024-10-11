import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      return action.payload; // This updates the state with user data
    },
    removeUser: () => {
      return null; // This resets the state (logs out the user)
    },
  },
});

export const { addUser, removeUser } = userSlice.actions; // Corrected actions export
export default userSlice.reducer; // Corrected reducer export

import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({ // Removed parentheses
    name: "gptSearch",
    initialState: {
        GPTSearchEnabled: false,
    },
    reducers: {
        handleGPTSearch: (state, action) => {
            state.GPTSearchEnabled = !state.GPTSearchEnabled;
        },
    },
});

// Exporting the action
export const { handleGPTSearch } = gptSlice.actions;

// Exporting the reducer
export default gptSlice.reducer;

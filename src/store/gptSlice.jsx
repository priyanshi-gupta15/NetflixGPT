import { createSlice } from "@reduxjs/toolkit";

const GptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptTab: false,
  },
  reducers: {
    toggleGptTab: (state) => {
      state.gptTab = !state.gptTab;
    },
  },
});

export const { toggleGptTab } = GptSlice.actions;
export default GptSlice.reducer;

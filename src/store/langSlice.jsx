import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "Lang",
  initialState: {
    lang: "en",

  },
  reducers: {
    setLang: (state, action) => {
      state.lang = action.payload;
    },
    
  },
});

export const { setLang } = langSlice.actions;
export default langSlice.reducer;
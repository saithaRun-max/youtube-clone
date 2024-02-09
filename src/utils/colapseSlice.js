import { createSlice } from "@reduxjs/toolkit";

const colapseSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },

  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenu } = colapseSlice.actions;
export default colapseSlice.reducer;

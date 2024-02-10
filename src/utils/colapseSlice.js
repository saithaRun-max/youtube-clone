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
    closeMenu: (state) => {
      state.isMenuOpen = false;
    }
  },
});

export const { toggleMenu,closeMenu } = colapseSlice.actions;
export default colapseSlice.reducer;

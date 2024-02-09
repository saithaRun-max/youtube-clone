import { configureStore } from "@reduxjs/toolkit";
import colapseSlice from "./colapseSlice";

const store = configureStore({
  reducer: {
    app: colapseSlice,
  },
});

export default store;

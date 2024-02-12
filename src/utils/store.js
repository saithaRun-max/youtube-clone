import { configureStore } from "@reduxjs/toolkit";
import colapseSlice from "./colapseSlice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    app: colapseSlice,
    search : searchSlice,
  },
});

export default store;

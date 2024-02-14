import { configureStore } from "@reduxjs/toolkit";
import colapseSlice from "./colapseSlice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: colapseSlice,
    search : searchSlice,
    chat: chatSlice,
  },
});

export default store;

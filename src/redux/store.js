import { configureStore } from "@reduxjs/toolkit";
import favoritesArrayReducer from "./favorites";

export default configureStore({
  reducer: {
    favoritesArray: favoritesArrayReducer,
  },
});

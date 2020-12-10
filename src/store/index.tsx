import { configureStore } from "@reduxjs/toolkit";

//Slices
import { newsSlice } from "./slices/news";

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
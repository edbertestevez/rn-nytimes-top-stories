import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

//Slices
import {newsSlice} from './slices/news';

export const store = configureStore({
  reducer: {
    news: newsSlice.reducer,
  },
  middleware: [...getDefaultMiddleware({immutableCheck: false})],
});

export type RootState = ReturnType<typeof store.getState>;

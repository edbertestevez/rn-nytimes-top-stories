import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { News } from "../../types/News";

interface INews {
  list: Array<News>;
}

const initialState: INews = {
  list: [{
      uri:"test",
      abstract: "test",
      multimedia: [{
          caption:"test",
          format: "test",
          url: 'test'
      }],
      byline: "test",
      title: "test",
      published_date: new Date(),
      url:'test'
  }],
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    reset: (state) => {
      state.list = [];
    },
    override: (state, action: PayloadAction<Array<News>>) => {
      state.list = action.payload;
    },
    append: (state, action: PayloadAction<Array<News>>) => {
      state.list.push(...action.payload);
    },
  },
});

export const newsSliceActions = {
  ...newsSlice.actions,
};
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sectionKeys} from '../../constants/sections';
import {News} from '../../types/News';

interface INews {
  list: Array<News>;
  sectionFilter: string;
}

const initialState: INews = {
  list: [],
  sectionFilter: sectionKeys.world,
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    reset: (state) => {
      state.list = [];
    },
    setList: (state, action: PayloadAction<Array<News>>) => {
      state.list = action.payload;
    },
    append: (state, action: PayloadAction<Array<News>>) => {
      state.list.push(...action.payload);
    },
    setSectionFilter: (state, action: PayloadAction<string>) => {
      state.sectionFilter = action.payload;
    },
  },
});

export const newsSliceActions = {
  ...newsSlice.actions,
};

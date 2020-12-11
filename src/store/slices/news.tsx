import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sectionKeys} from '../../constants/sections';
import {News} from '../../types/News';

interface INews {
  list: Array<News>;
  sectionFilter: string;
  keywordFilter: string;
}

const initialState: INews = {
  list: [],
  sectionFilter: sectionKeys.world,
  keywordFilter: '',
};

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset: (state) => {
      state = initialState;
    },
    setList: (state, action: PayloadAction<Array<News>>) => {
      state.list = action.payload;
    },
    setSectionFilter: (state, action: PayloadAction<string>) => {
      state.sectionFilter = action.payload;
    },
    setKeywordFilter: (state, action: PayloadAction<string>) => {
      state.keywordFilter = action.payload;
    },
  },
});

export const newsSliceActions = {
  ...newsSlice.actions,
};

import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sectionKeys} from '../../constants/sections';
import {News} from '../../types/News';

export type TSectionNewsList = {
  [key in sectionKeys]: Array<News> | [];
};

export interface INews {
  sectionList: TSectionNewsList | {};
  sectionFilter: string;
  keywordFilter: string;
  locationFilter: string;
}

const initialState: INews = {
  sectionList: {},
  sectionFilter: sectionKeys.world,
  keywordFilter: '',
  locationFilter: '',
};

interface IPayload {
  list: Array<News>;
  sectionFilter: string;
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset: (state) => {
      state = initialState;
    },
    setList: (state: INews, action: PayloadAction<IPayload>) => {
      if (state.sectionList === {}) {
        state.sectionList = {
          [state.sectionFilter]: action.payload,
        };
      } else {
        state.sectionList = {
          ...state.sectionList,
          [state.sectionFilter]: action.payload,
        };
      }
    },
    setSectionFilter: (state, action: PayloadAction<string>) => {
      state.sectionFilter = action.payload;
    },
    setKeywordFilter: (state, action: PayloadAction<string>) => {
      state.keywordFilter = action.payload;
    },
    setLocationFilter: (state, action: PayloadAction<string>) => {
      state.locationFilter = action.payload;
    },
  },
});

export const newsSliceActions = {
  ...newsSlice.actions,
};

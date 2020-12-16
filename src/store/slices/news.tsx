import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {sectionKeys} from '../../constants/sections';
import {News} from '../../types/News';

export type TSectionNewsList = {
  [key in sectionKeys]: Array<News> | [];
};

export interface INews {
  sectionList: TSectionNewsList | {};
  articleSearchList: Array<News> | [];
  sectionFilter: string;
  keywordFilter: string;
  locationFilter: string;
}

export let initialState: INews = {
  sectionList: {},
  articleSearchList: [],
  sectionFilter: sectionKeys.world,
  keywordFilter: '',
  locationFilter: '',
};

interface IPayload {
  list: Array<News>;
  sectionFilter?: string;
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset: (state) => {
      state = initialState;
    },
    //Top-Stories List
    setList: (state: INews, action: PayloadAction<IPayload>) => {
      if (state.sectionList == {}) {
        state.sectionList = {
          [state.sectionFilter]: action.payload.list,
        };
      } else {
        state.sectionList = {
          ...state.sectionList,
          [state.sectionFilter]: action.payload.list,
        };
      }
    },
    //Article Search (Location/Keyword/Section) List
    setArticleSearchList: (state: INews, action: PayloadAction<IPayload>) => {
      state.articleSearchList = action.payload.list;
    },
    setSectionFilter: (state, action: PayloadAction<string>) => {
      state.sectionFilter = action.payload;
    },
    setKeywordFilter: (state, action: PayloadAction<string>) => {
      state.keywordFilter = action.payload || '';
    },
    setLocationFilter: (state, action: PayloadAction<string>) => {
      state.locationFilter = action.payload || '';
    },
  },
});

export const newsSliceActions = {
  ...newsSlice.actions,
};

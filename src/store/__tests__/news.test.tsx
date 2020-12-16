import configureMockStore from 'redux-mock-store';
import {initialState, newsSliceActions, INews} from '../slices/news';
import thunk from 'redux-thunk';
import {AppDispatch} from '../../store/index';
import {sectionKeys} from '../../constants/sections';
import {MediaSize} from '../../utils/multimedia';

const middlewares: any = [thunk];
const mockStore = configureMockStore(middlewares);

describe('[Redux] News slice testing', () => {
  let store: any;
  let dispatch: AppDispatch;

  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
    dispatch = store.dispatch;
  });

  let mockListFilter = {
    list: [
      {
        title: 'Test',
        abstract: 'Test',
        url: 'Test',
        uri: 'Test',
        byline: 'Test',
        published_date: new Date('2020-12-16T06:46:53.375Z'),
        multimedia: [
          {
            url:
              'https://static01.nyt.com/images/2020/12/15/arts/best-comedy-2020-topart/best-comedy-2020-topart-superJumbo.jpg',
            format: MediaSize.SUPER_JUMBO,
            type: 'image',
            caption: 'Caption',
          },
          {
            url:
              'https://static01.nyt.com/images/2020/12/15/arts/best-comedy-2020-topart/best-comedy-2020-topart-thumbStandard.jpg',
            format: MediaSize.STANDARD,
            type: 'image',
            caption: 'Caption',
          },
          {
            url:
              'https://static01.nyt.com/images/2020/12/15/arts/best-comedy-2020-topart/best-comedy-2020-topart-thumbLarge.jpg',
            format: MediaSize.LARGE,
            type: 'image',
            caption: 'Caption',
          },
          {
            url:
              'https://static01.nyt.com/images/2020/12/15/arts/best-comedy-2020-topart/best-comedy-2020-topart-mediumThreeByTwo210.jpg',
            format: MediaSize.MEDIUM,
            type: 'image',
            caption: 'Caption',
          },
        ],
      },
    ],
  };

  it('check intial news state', () => {
    let news: INews = store.getState();

    expect(news.sectionList).toEqual({});
    expect(news.articleSearchList).toEqual([]);
    expect(news.sectionFilter).toEqual(sectionKeys.world);
    expect(news.keywordFilter).toEqual('');
    expect(news.locationFilter).toEqual('');
  });

  it('creates <news>/reset when dispatch is successful', () => {
    dispatch(newsSliceActions.reset());

    expect(store.getActions()).toEqual([
      {
        payload: undefined,
        type: 'news/reset',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();

    expect(store.getState()).toEqual(initialState);
  });

  it('creates <news>/setSectionFilter when dispatch is successful', () => {
    dispatch(newsSliceActions.setSectionFilter('Test'));

    expect(store.getActions()).toEqual([
      {
        payload: 'Test',
        type: 'news/setSectionFilter',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates <news>/setKeywordFilter when dispatch is successful', () => {
    dispatch(newsSliceActions.setKeywordFilter('Test'));

    expect(store.getActions()).toEqual([
      {
        payload: 'Test',
        type: 'news/setKeywordFilter',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates <news>/setLocationFilter when dispatch is successful', () => {
    dispatch(newsSliceActions.setLocationFilter('Test'));

    expect(store.getActions()).toEqual([
      {
        payload: 'Test',
        type: 'news/setLocationFilter',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates <news>/setList when dispatch is successful', () => {
    dispatch(newsSliceActions.setList(mockListFilter));

    expect(store.getActions()).toEqual([
      {
        payload: mockListFilter,
        type: 'news/setList',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates <news>/setArticleSearchList when dispatch is successful', () => {
    dispatch(newsSliceActions.setArticleSearchList(mockListFilter));

    expect(store.getActions()).toEqual([
      {
        payload: mockListFilter,
        type: 'news/setArticleSearchList',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();
  });
});

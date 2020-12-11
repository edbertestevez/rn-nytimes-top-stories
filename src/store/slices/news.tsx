import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {News} from '../../types/News';

interface INews {
  list: Array<News>;
}

const initialState: INews = {
  list: [
    {
      title: 'Carnegie Hall Stands By Its Chairman, Despite Tax Violations',
      abstract:
        'Robert F. Smith has acknowledged his involvement in a 15-year scheme to hide more than $200 million in income and evade taxes, but he retains the support of the hall’s board.',
      byline: 'By Robin Pogrebin',
      published_date: new Date('2020-12-09T11:08:16-05:00'),
      multimedia: [
        {
          url:
            'https://static01.nyt.com/images/2020/12/10/arts/00smith-carnegie1a/00smith-carnegie1a-superJumbo.jpg',
          format: 'superJumbo',
          caption:
            'Robert F. Smith at Carnegie Hall&rsquo;s Opening Night Gala Dinner on Oct. 3, 2019. The chairman of the Carnegie Hall board, he has retained the support of other members after he acknowledged having evaded income taxes.',
        },
        {
          url:
            'https://static01.nyt.com/images/2020/12/10/arts/00smith-carnegie1a/00smith-carnegie1a-thumbStandard.jpg',
          format: 'Standard Thumbnail',
          caption:
            'Robert F. Smith at Carnegie Hall&rsquo;s Opening Night Gala Dinner on Oct. 3, 2019. The chairman of the Carnegie Hall board, he has retained the support of other members after he acknowledged having evaded income taxes.',
        },
        {
          url:
            'https://static01.nyt.com/images/2020/12/10/arts/00smith-carnegie1a/00smith-carnegie1a-thumbLarge.jpg',
          format: 'thumbLarge',
          caption:
            'Robert F. Smith at Carnegie Hall&rsquo;s Opening Night Gala Dinner on Oct. 3, 2019. The chairman of the Carnegie Hall board, he has retained the support of other members after he acknowledged having evaded income taxes.',
        },
        {
          url:
            'https://static01.nyt.com/images/2020/12/10/arts/00smith-carnegie1a/00smith-carnegie1a-mediumThreeByTwo210-v2.jpg',
          format: 'mediumThreeByTwo210',
          caption:
            'Robert F. Smith at Carnegie Hall&rsquo;s Opening Night Gala Dinner on Oct. 3, 2019. The chairman of the Carnegie Hall board, he has retained the support of other members after he acknowledged having evaded income taxes.',
        },
        {
          url:
            'https://static01.nyt.com/images/2020/12/10/arts/00smith-carnegie1a/00smith-carnegie1a-articleInline.jpg',
          format: 'Normal',
          caption:
            'Robert F. Smith at Carnegie Hall&rsquo;s Opening Night Gala Dinner on Oct. 3, 2019. The chairman of the Carnegie Hall board, he has retained the support of other members after he acknowledged having evaded income taxes.',
        },
      ],

      uri: 'nyt://article/803810d6-30e8-5519-8b4a-53d16f0d66a8',
      url:
        'https://www.nytimes.com/2020/12/09/arts/music/carnegie-hall-robert-f-smith-tax-violations.html',
    },
  ],
};

export const newsSlice = createSlice({
  name: 'news',
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

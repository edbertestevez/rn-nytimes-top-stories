import {get_multimedia_by_format, MediaSize} from '../multimedia';

const mockMultimediaData = [
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
  /** Used for non-existing media format**/
  // {
  //   url:
  //     'https://static01.nyt.com/images/2020/12/15/arts/best-comedy-2020-topart/best-comedy-2020-topart-articleInline.jpg',
  //   format: MediaSize.NORMAL,
  //   type: 'image',
  //   caption: 'Caption',
  // },
];

describe('multimedia utils check', () => {
  it('should return SUPER_JUMBO media image', () => {
    expect(
      get_multimedia_by_format(mockMultimediaData, MediaSize.SUPER_JUMBO),
    ).toEqual(mockMultimediaData[0]);
  });

  it('should return STANDARD media image', () => {
    expect(
      get_multimedia_by_format(mockMultimediaData, MediaSize.STANDARD),
    ).toEqual(mockMultimediaData[1]);
  });

  it('should return LARGE media image', () => {
    expect(
      get_multimedia_by_format(mockMultimediaData, MediaSize.LARGE),
    ).toEqual(mockMultimediaData[2]);
  });

  it('should return MEDIUM media image', () => {
    expect(
      get_multimedia_by_format(mockMultimediaData, MediaSize.MEDIUM),
    ).toEqual(mockMultimediaData[3]);
  });

  it('should return NULL if multimedia data is empty', () => {
    expect(get_multimedia_by_format([], MediaSize.NORMAL)).toBeNull();
  });

  it('should return NULL if media format not found', () => {
    expect(
      get_multimedia_by_format(mockMultimediaData, MediaSize.NORMAL),
    ).toBeNull();
  });
});

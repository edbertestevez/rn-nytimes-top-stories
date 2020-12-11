import {IMultimedia} from '../types/News';

export enum MediaSize {
  SUPER_JUMBO = 'superJumbo',
  STANDARD = 'Standard Thumbnail',
  LARGE = 'thumbLarge',
  MEDIUM = 'mediumThreeByTwo210',
  NORMAL = 'Normal',
}

export const get_multimedia_by_format = (
  media: Array<IMultimedia>,
  size: MediaSize,
) => {
  return media.filter((item: IMultimedia) => item.format === size)[0].url;
};

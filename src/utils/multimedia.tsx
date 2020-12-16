import {IMultimedia} from '../types/News';
import {isNullEmptyOrUndefined} from './common';

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
  if (isNullEmptyOrUndefined(media)) {
    return null;
  }

  return media.filter((item: IMultimedia) => item.format === size)[0] || null;
};

import {AppRoutes} from '../navigation/AppRoutes';
import {News} from './News';

//Stack Interfaces
export type NewsStackParams = {
  [AppRoutes.NEWSFEED]: undefined;
  [AppRoutes.NEWS_DETAILS]: {details: News};
};

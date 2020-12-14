import {Platform} from 'react-native';

export const isNullEmptyOrUndefined = (value: any) => {
  return (
    typeof value === 'undefined' ||
    value === null ||
    value === '' ||
    (typeof value === 'object' && Object.keys(value).length <= 0)
  );
};

export const isPlatformAndroid = () => {
  return Platform.OS === 'android';
};

export const isPlatformIOS = () => {
  return Platform.OS === 'ios';
};

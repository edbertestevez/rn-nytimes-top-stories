import Enzyme from 'enzyme';
import {
  isNullEmptyOrUndefined,
  isPlatformAndroid,
  isPlatformIOS,
} from '../common';
import {Platform} from 'react-native';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter: new Adapter()});

const setPlatform = (platform: 'android' | 'ios') => {
  Object.defineProperty(Platform, 'OS', {
    get: jest.fn(() => platform),
  });
};

describe('common utils', () => {
  //isNullEmptyOrUndefined
  describe('isNullEmptyOrUndefined check', () => {
    it('should check null value, returns TRUE', () => {
      expect(isNullEmptyOrUndefined(null)).toEqual(true);
    });

    it('should check empty string value, returns TRUE', () => {
      expect(isNullEmptyOrUndefined('')).toEqual(true);
    });

    it('should check undefined value, returns TRUE', () => {
      expect(isNullEmptyOrUndefined(undefined)).toEqual(true);
    });

    it('should check empty object value, returns TRUE', () => {
      expect(isNullEmptyOrUndefined({})).toEqual(true);
    });

    it('should check valid string values, returns FALSE', () => {
      expect(isNullEmptyOrUndefined('Test')).toEqual(false);
    });

    it('should check valid numeric values, returns FALSE', () => {
      expect(isNullEmptyOrUndefined(0)).toEqual(false);
    });

    it('should check non-empty object, returns FALSE', () => {
      expect(isNullEmptyOrUndefined({params: 'test'})).toEqual(false);
    });
  });

  //Platform Specific Tests
  describe('platform check', () => {
    it('should check if ANDROID platform', () => {
      setPlatform('android');
      expect(isPlatformAndroid()).toEqual(true);
    });

    it('should check if IOS platform', () => {
      setPlatform('ios');
      expect(isPlatformIOS()).toEqual(true);
    });
  });
});

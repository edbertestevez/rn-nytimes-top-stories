import configureMockStore from 'redux-mock-store';
import {ISelectItem} from '../../types/Input';
import {initialState, locationSliceActions} from '../slices/location';
import thunk from 'redux-thunk';
import {AppDispatch} from '../../store/index';

const middlewares: any = [thunk];
const mockStore = configureMockStore(middlewares);

describe('[Redux] Location slice testing', () => {
  let store: any;
  let dispatch: AppDispatch;

  beforeEach(() => {
    store = mockStore(initialState);
    store.clearActions();
    dispatch = store.dispatch;
  });

  it('check default countries state', () => {
    let countries = store.getState().countries;
    const initialCountry = countries.find(
      (c: ISelectItem) => c.label === 'Location',
    );

    expect(initialCountry).not.toBeNull();
    expect(initialCountry?.value).toEqual('');
  });

  it('creates <location>/reset when dispatch is successful', () => {
    dispatch(locationSliceActions.reset());

    expect(store.getActions()).toEqual([
      {
        payload: undefined,
        type: 'location/reset',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();
  });

  it('creates <location>/setCountries when dispatch is successful', () => {
    const testCountries: Array<ISelectItem> = [
      {value: 'country1', label: 'Country 1'},
      {value: 'country2', label: 'Country 2'},
    ];

    dispatch(locationSliceActions.setCountries({countries: testCountries}));

    expect(store.getActions()).toEqual([
      {
        payload: {countries: testCountries},
        type: 'location/setCountries',
      },
    ]);

    expect(store.getActions()).toMatchSnapshot();
  });
});

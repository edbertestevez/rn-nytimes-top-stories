import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISelectItem} from '../../types/Input';

interface ILocationState {
  countries: Array<ISelectItem>;
}

const defaultCountry = [
  {
    label: 'Location',
    value: '',
  },
];

const initialState: ILocationState = {
  countries: defaultCountry,
};

interface IPayload {
  countries: Array<ISelectItem>;
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    reset: (state) => {
      state = initialState;
    },
    setCountries: (state: ILocationState, action: PayloadAction<IPayload>) => {
      state.countries = [...defaultCountry, ...action.payload.countries];
    },
  },
});

export const locationSliceActions = {
  ...locationSlice.actions,
};

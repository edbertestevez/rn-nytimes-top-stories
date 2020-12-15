import React, {ReactText, useState, useCallback} from 'react';
import styled from 'styled-components/native';
import TextField from '../../../common/TextField';
import {View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../../store';
import {INews, newsSliceActions} from '../../../../store/slices/news';
import {defaultTheme} from '../../../../styles/theme';
import SelectField from '../../../common/SelectField';
import {debounce} from 'lodash';

//Styled Definition
const Container = styled.View`
  background-color: ${defaultTheme.SECONDARY_BACKGROUND_COLOR};
  padding: 12px;
  flex-direction: row;
  justify-content: space-between;
`;

const SearchArea: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const {locationFilter, keywordFilter}: INews = useSelector(
    (state: RootState) => state.news,
  );

  const countriesList = useSelector(
    (state: RootState) => state.location.countries,
  );

  const [localSearch, setLocalSearch] = useState(keywordFilter || '');

  const debouncedDispatch = useCallback(
    debounce((search: string) => {
      dispatch(newsSliceActions.setKeywordFilter(search));
    }, 500),
    [],
  );

  const onKeywordChange = (search: string) => {
    setLocalSearch(search);
    debouncedDispatch(search);
  };

  const onLocationChange = (location: ReactText) => {
    dispatch(newsSliceActions.setLocationFilter(location.toString()));
  };

  return (
    <Container>
      <SelectField
        selection={countriesList}
        selectedValue={locationFilter}
        onSelectChange={onLocationChange}
        flexRatio={1}
      />
      <View style={{marginHorizontal: 4}} />
      <TextField
        onChangeText={onKeywordChange}
        value={localSearch}
        placeholder={'Search keyword'}
        flexRatio={1}
      />
    </Container>
  );
});

export default SearchArea;

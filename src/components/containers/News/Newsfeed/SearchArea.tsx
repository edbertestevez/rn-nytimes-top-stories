import React from 'react';
import styled from 'styled-components/native';
import TextField from '../../../common/TextField';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../../store';
import {newsSliceActions} from '../../../../store/slices/news';
import {defaultTheme} from '../../../../styles/theme';

//Styled Definition
const Container = styled.View`
  background-color: ${defaultTheme.SECONDARY_BACKGROUND_COLOR};
  padding: 12px;
`;

const SearchArea: React.FC = () => {
  const keywordFilter: string = useSelector(
    (state: RootState) => state.news.keywordFilter,
  );
  const dispatch = useDispatch();

  const onKeywordChange = (search: string) => {
    dispatch(newsSliceActions.setKeywordFilter(search));
  };

  return (
    <Container>
      <TextField
        onChangeText={onKeywordChange}
        value={keywordFilter}
        placeholder={'Search keyword'}
      />
    </Container>
  );
};

export default SearchArea;

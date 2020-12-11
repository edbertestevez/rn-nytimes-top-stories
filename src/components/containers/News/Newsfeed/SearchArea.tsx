import React from 'react';
import {View, StyleSheet} from 'react-native';
import TextField from '../../../common/TextField';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../../../../store';
import {newsSliceActions} from '../../../../store/slices/news';
import {defaultTheme} from '../../../../styles/theme';

const SearchArea: React.FC = () => {
  const keywordFilter: string = useSelector(
    (state: RootState) => state.news.keywordFilter,
  );
  const dispatch = useDispatch();

  const onKeywordChange = (search: string) => {
    dispatch(newsSliceActions.setKeywordFilter(search));
  };

  return (
    <View style={styles.container}>
      <TextField
        onChangeText={onKeywordChange}
        value={keywordFilter}
        placeholder={'Search keyword'}
      />
    </View>
  );
};

export default SearchArea;

const styles = StyleSheet.create({
  container: {
    backgroundColor: defaultTheme.SECONDARY_BACKGROUND_COLOR,
    padding: 12,
  },
});

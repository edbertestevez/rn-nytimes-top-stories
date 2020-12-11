import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import NewsList from './NewsList';
import Sections from './Sections';

import useHttpRequest from '../../../../hooks/useHttpRequest';
import {
  NYTIMES_API_KEY,
  NYTIMES_API_STORIES_ENDPOINT,
} from '../../../../config/requests';
import {RequestMethods} from '../../../../constants/common';
import {RootState} from '../../../../store';
import {newsSliceActions} from '../../../../store/slices/news';
import SearchArea from './SearchArea';

const Newsfeed: React.FC = () => {
  const sectionFilter = useSelector(
    (state: RootState) => state.news.sectionFilter,
  );
  const dispatch = useDispatch();

  let storiesUrl = `${NYTIMES_API_STORIES_ENDPOINT}${sectionFilter}.json?api-key=${NYTIMES_API_KEY}`;
  let requestHook = useHttpRequest(storiesUrl, RequestMethods.GET);

  useEffect(() => {
    if (requestHook.data) {
      dispatch(newsSliceActions.setList(requestHook.data.results));
    }
  }, [sectionFilter, dispatch, requestHook.data]);

  return (
    <View style={styles.container}>
      <Sections />
      <SearchArea />

      {requestHook.loading ? (
        <ActivityIndicator style={styles.loader} color={'#000'} size={32} />
      ) : (
        <NewsList />
      )}
    </View>
  );
};

export default Newsfeed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loader: {
    marginTop: 16,
  },
});

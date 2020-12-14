import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components/native';

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
import {News} from '../../../../types/News';

//Styled Definition
const Container = styled.View`
  flex: 1;
`;

const Refresh = styled.View`
  background-color: #77cfe8;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 16px;
`;

const LoaderText = styled.Text`
  color: #fff;
  margin-left: 8px;
`;

const Newsfeed: React.FC = () => {
  const sectionFilter = useSelector(
    (state: RootState) => state.news.sectionFilter,
  );

  const dispatch = useDispatch();

  let storiesUrl = `${NYTIMES_API_STORIES_ENDPOINT}${sectionFilter}.json?api-key=${NYTIMES_API_KEY}`;
  let {request, isLoading} = useHttpRequest(storiesUrl, RequestMethods.GET);

  useEffect(() => {
    if (request.data && isLoading) {
      let formattedData = request.data.results.map((item: News) => {
        return {
          title: item.title,
          abstract: item.abstract,
          url: item.url,
          uri: item.uri,
          byline: item.byline,
          published_date: item.published_date,
          multimedia: item.multimedia,
        };
      });

      dispatch(newsSliceActions.setList(formattedData));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sectionFilter, dispatch, request.data]);

  return (
    <Container>
      <Sections />

      <SearchArea />

      {isLoading && (
        <Refresh>
          <ActivityIndicator color={'#fff'} size={32} />
          <LoaderText>Fetching top stories</LoaderText>
        </Refresh>
      )}

      <NewsList />
    </Container>
  );
};

export default Newsfeed;

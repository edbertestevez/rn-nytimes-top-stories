import React, {useEffect} from 'react';
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

//Styled Definition
const Container = styled.View`
  flex: 1;
`;

const Newsfeed: React.FC = () => {
  const sectionFilter = useSelector(
    (state: RootState) => state.news.sectionFilter,
  );
  const dispatch = useDispatch();

  let storiesUrl = `${NYTIMES_API_STORIES_ENDPOINT}${sectionFilter}.json?api-key=${NYTIMES_API_KEY}`;
  let {request, isLoading} = useHttpRequest(storiesUrl, RequestMethods.GET);

  useEffect(() => {
    if (request.data) {
      dispatch(newsSliceActions.setList(request.data.results));
    }
  }, [sectionFilter, dispatch, request.data]);

  return (
    <Container>
      <Sections />

      <SearchArea />

      <NewsList showLoader={isLoading} />
    </Container>
  );
};

export default Newsfeed;

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
  NYTIMES_API_SEARCH_ARTICLE_ENDPOINT,
  REST_COUNTRIES_ENDPOINT,
  NYTIMES_SITE,
} from '../../../../config/requests';
import {RequestMethods} from '../../../../constants/common';
import {RootState} from '../../../../store';
import {newsSliceActions} from '../../../../store/slices/news';
import SearchArea from './SearchArea';
import {ArticleSearch, News} from '../../../../types/News';
import {ISelectItem} from '../../../../types/Input';
import {locationSliceActions} from '../../../../store/slices/location';
import {isNullEmptyOrUndefined} from '../../../../utils/common';

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
  const dispatch = useDispatch();

  const {locationFilter, sectionFilter, keywordFilter} = useSelector(
    (state: RootState) => state.news,
  );

  //Conditional URLs
  let storiesUrl = `${NYTIMES_API_STORIES_ENDPOINT}${sectionFilter}.json?api-key=${NYTIMES_API_KEY}`;
  let articlesUrl = `${NYTIMES_API_SEARCH_ARTICLE_ENDPOINT}&fq=section_name:(${sectionFilter})${
    !isNullEmptyOrUndefined(locationFilter) &&
    ` AND glocations:(${locationFilter})`
  }&q=${keywordFilter}`;

  let hasFilter = locationFilter || keywordFilter;

  let {request, isLoading} = useHttpRequest(
    hasFilter ? articlesUrl : storiesUrl,
    RequestMethods.GET,
  );
  let locationApi = useHttpRequest(REST_COUNTRIES_ENDPOINT, RequestMethods.GET);

  useEffect(() => {
    if (locationApi.request.data) {
      let countries: Array<ISelectItem> = [];
      locationApi.request.data.map((item: {name: string}) =>
        countries.push({label: item.name, value: item.name}),
      );

      dispatch(locationSliceActions.setCountries({countries}));
    }
  }, [locationApi.request.data, dispatch]);

  useEffect(() => {
    if (request.data && !isLoading) {
      let formattedData;

      if (!hasFilter) {
        formattedData = request.data.results.map((item: News) => {
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
      } else {
        formattedData = request.data.response.docs.map(
          (item: ArticleSearch) => {
            return {
              title: item.headline.main,
              abstract: item.abstract,
              url: item.web_url,
              uri: item.uri,
              byline: item.byline.original,
              published_date: item.pub_date,
              multimedia: item.multimedia.map((media) => {
                let formatMultimedia = media;
                formatMultimedia.url = NYTIMES_SITE + media.url;
                formatMultimedia.format = media.subType;
                return formatMultimedia;
              }),
            };
          },
        );
      }

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
          <LoaderText>
            Fetching {hasFilter ? 'articles' : 'top stories'}
          </LoaderText>
        </Refresh>
      )}

      <NewsList />
    </Container>
  );
};

export default Newsfeed;

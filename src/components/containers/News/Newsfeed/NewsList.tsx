import React from 'react';
import styled from 'styled-components/native';
import {FlatList, StyleSheet} from 'react-native';
import {RootState} from '../../../../store';
import {News} from '../../../../types/News';
import ArticleItem from '../../../common/ArticleItem';
import {useSelector} from 'react-redux';
import NavigationService from '../../../../services/NavigationService';
import {AppRoutes} from '../../../../navigation/AppRoutes';

//Styled Definition
const Container = styled.View`
  flex: 1;
  background-color: #77cfe8;
`;

const styles = StyleSheet.create({
  listContent: {
    paddingTop: 8,
    paddingBottom: 20,
  },
});

const NewsList: React.FC = () => {
  const feed: Array<News> = useSelector((state: RootState) => state.news.list);

  const keywordFilter: string = useSelector(
    (state: RootState) => state.news.keywordFilter,
  ).toLowerCase();

  const searchResult = feed.filter(
    (news) =>
      news.title.toLowerCase().includes(keywordFilter) ||
      news.abstract.toLowerCase().includes(keywordFilter),
  );

  return (
    <Container>
      <FlatList<News>
        keyExtractor={(row) => row.uri}
        renderItem={({item}) => (
          <ArticleItem
            {...item}
            onPress={() =>
              NavigationService.navigate(AppRoutes.NEWS_DETAILS, {
                details: item,
              })
            }
          />
        )}
        data={searchResult}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </Container>
  );
};

export default NewsList;

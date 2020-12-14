import React from 'react';
import styled from 'styled-components/native';
import {FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import {RootState} from '../../../../store';
import {News} from '../../../../types/News';
import ArticleItem from '../../../common/ArticleItem';
import {useSelector} from 'react-redux';
import NavigationService from '../../../../services/NavigationService';
import {AppRoutes} from '../../../../navigation/AppRoutes';
import {INews} from '../../../../store/slices/news';
import {isNullEmptyOrUndefined} from '../../../../utils/common';

//Styled Definition
const Container = styled.View`
  flex: 1;
  background-color: #77cfe8;
`;

const Refresh = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

const LoaderText = styled.Text`
  color: #fff;
  margin-left: 8px;
`;

const styles = StyleSheet.create({
  listContent: {
    paddingTop: 8,
    paddingBottom: 20,
  },
});

const NewsList: React.FC<{showLoader: boolean}> = ({showLoader}) => {
  const newsData: INews = useSelector((state: RootState) => state.news);

  const {sectionList, sectionFilter, keywordFilter} = newsData;

  const searchResult = isNullEmptyOrUndefined(sectionList)
    ? []
    : isNullEmptyOrUndefined((sectionList as any)[sectionFilter])
    ? []
    : (sectionList as any)[sectionFilter].filter(
        (news: News) =>
          news.title.toLowerCase().includes(keywordFilter.toLowerCase()) ||
          news.abstract.toLowerCase().includes(keywordFilter.toLowerCase()),
      );

  return (
    <Container>
      {showLoader && (
        <Refresh>
          <ActivityIndicator color={'#fff'} size={32} />
          <LoaderText>Refreshing list</LoaderText>
        </Refresh>
      )}

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

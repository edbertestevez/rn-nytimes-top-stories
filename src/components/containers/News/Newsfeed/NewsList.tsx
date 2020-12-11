import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {RootState} from '../../../../store';
import {News} from '../../../../types/News';
import ArticleItem from '../../../common/ArticleItem';
import {useSelector} from 'react-redux';

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
    <View style={styles.container}>
      <FlatList<News>
        keyExtractor={(row) => row.uri}
        renderItem={({item}) => <ArticleItem {...item} />}
        data={searchResult}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77CFE8',
  },
  listContent: {
    paddingTop: 8,
    paddingBottom: 20,
  },
});

import React from 'react';
import {View, FlatList} from 'react-native';
import {RootState} from '../../../../store';
import {News} from '../../../../types/News';
import ArticleItem from '../../../common/ArticleItem';
import {useSelector} from 'react-redux';

const Newsfeed: React.FC = () => {
  const feed: Array<News> = useSelector((state: RootState) => state.news.list);

  return (
    <View>
      <FlatList<News>
        keyExtractor={(row) => row.uri}
        renderItem={({item}) => <ArticleItem {...item} />}
        data={feed}
      />
    </View>
  );
};

export default Newsfeed;

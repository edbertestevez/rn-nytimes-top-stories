import React from 'react';
import {Text, View} from 'react-native';
import {News} from '../../../types/News';
import {ArticleView, DetailsPreview, ThumbnailPreview, Title} from './styles';
import {get_multimedia_by_format, MediaSize} from '../../../utils/multimedia';
import {DEFAULT_TOUCHABLE_OPACITY} from '../../../config/widgets';
import TimeAgo from 'react-timeago';

const ArticleItem: React.FC<News> = (props: News) => {
  let {title, multimedia, byline, published_date} = props;
  let imageUrl = get_multimedia_by_format(multimedia, MediaSize.LARGE);

  return (
    <ArticleView activeOpacity={DEFAULT_TOUCHABLE_OPACITY}>
      <ThumbnailPreview source={{uri: imageUrl}} />

      <DetailsPreview>
        <Title numberOfLines={2}>{title}</Title>

        <View>
          <Text>{byline}</Text>
          <Text>
            Published: <TimeAgo component={Text} date={published_date} />
          </Text>
        </View>
      </DetailsPreview>
    </ArticleView>
  );
};

export default ArticleItem;

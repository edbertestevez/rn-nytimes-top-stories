import React from 'react';
import {Text, View} from 'react-native';
import {News} from '../../../types/News';
import {ArticleView, DetailsPreview, ThumbnailPreview, Title} from './styles';
import {get_multimedia_by_format, MediaSize} from '../../../utils/multimedia';
import {
  DEFAULT_IMAGE_URI,
  DEFAULT_TOUCHABLE_OPACITY,
} from '../../../config/widgets';
import TimeAgo from 'react-timeago';

interface IProps extends News {
  onPress: () => void;
}

const ArticleItem: React.FC<IProps> = (props: IProps) => {
  let {title, multimedia, byline, published_date, onPress} = props;
  let mediaImage = get_multimedia_by_format(multimedia, MediaSize.LARGE);

  return (
    <ArticleView onPress={onPress} activeOpacity={DEFAULT_TOUCHABLE_OPACITY}>
      <ThumbnailPreview
        source={{uri: mediaImage ? mediaImage.url : DEFAULT_IMAGE_URI}}
      />

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

import React from 'react';
import {Text} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {AppRoutes} from '../../../../navigation/AppRoutes';
import {NewsStackParams} from '../../../../types/Routes';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  get_multimedia_by_format,
  MediaSize,
} from '../../../../utils/multimedia';
import TimeAgo from 'react-timeago';
import AppButton from '../../../common/AppButton';
import {
  Abstract,
  Caption,
  Content,
  Media,
  ScrollContainer,
  Title,
  InfoLabel,
} from './style';
import {defaultTheme} from '../../../../styles/theme';

type DetailsRouteProps = RouteProp<NewsStackParams, AppRoutes.NEWS_DETAILS>;

type DetailsNavigationProp = StackNavigationProp<
  NewsStackParams,
  AppRoutes.NEWS_DETAILS
>;

interface IProps {
  route: DetailsRouteProps;
  navigation: DetailsNavigationProp;
}

const Details: React.FC<IProps> = (props) => {
  const {details} = props.route.params;
  const {multimedia, title, byline, published_date, abstract} = details;
  const mediaImage = get_multimedia_by_format(
    multimedia,
    MediaSize.SUPER_JUMBO,
  );

  return (
    <ScrollContainer contentContainerStyle={{paddingBottom: 20}}>
      <Media source={{uri: mediaImage.url}} />

      <Content>
        {mediaImage.caption && <Caption>Caption: {mediaImage.caption}</Caption>}

        <Title>{title}</Title>
        <InfoLabel>{byline}</InfoLabel>
        <InfoLabel>
          Published: <TimeAgo component={Text} date={published_date} />
        </InfoLabel>
        <Abstract>{abstract}</Abstract>
      </Content>

      <AppButton
        bgColor={defaultTheme.DEFAULT_BACKGROUND_COLOR}
        color={defaultTheme.SELECTED_COLOR}
        width={200}
        height={50}
        onPress={() => props.navigation.goBack()}
        label={'BACK'}
        style={{alignSelf: 'center'}}
      />
    </ScrollContainer>
  );
};

export default Details;

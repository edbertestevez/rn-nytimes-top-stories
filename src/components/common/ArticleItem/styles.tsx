import styled from 'styled-components/native';
import {defaultFontSize} from '../../../styles/font';
import {defaultTheme} from '../../../styles/theme';

export const ArticleView = styled.TouchableOpacity`
  background-color: ${defaultTheme.PRIMARY_CARD_COLOR};
  flex-direction: row;
  margin-horizontal: 12px;
  margin-vertical: 6px;
  padding: 12px;
`;

export const DetailsPreview = styled.View`
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding-horizontal: 16px;
`;

export const Title = styled.Text`
  font-size: ${defaultFontSize.TITLE}px;
  font-weight: 700;
`;

export const ThumbnailPreview = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;

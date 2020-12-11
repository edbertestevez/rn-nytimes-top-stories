import styled from 'styled-components/native';
import {defaultFontSize} from '../../../../styles/font';
import {defaultTheme} from '../../../../styles/theme';

export const ScrollContainer = styled.ScrollView`
  background-color: ${defaultTheme.DEFAULT_BACKGROUND_COLOR};
  padding-bottom: 24px;
`;

export const Media = styled.Image`
  width: auto;
  height: 250px;
`;

export const Content = styled.View`
  padding-horizontal: 20;
`;

export const Caption = styled.Text`
  font-style: italic;
  font-size: ${defaultFontSize.NORMAL}px;
  color: #6b6b6b;
  text-align: center;
  padding-top: 8px;
  padding-bottom: 20px;
  font-weight: 500;
`;

export const Title = styled.Text`
  font-size: ${defaultFontSize.LARGE}px;
  font-weight: 700;
  padding-vertical: 8px;
`;

export const InfoLabel = styled.Text`
  font-size: ${defaultFontSize.SMALL}px;
  color: #6b6b6b;
`;

export const Abstract = styled.Text`
  font-size: ${defaultFontSize.MEDIUM}px;
  padding-vertical: 16;
  margin-bottom: 80;
`;

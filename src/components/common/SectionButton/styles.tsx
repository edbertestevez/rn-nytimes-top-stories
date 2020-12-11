import styled from 'styled-components/native';
import {ISectionProps} from '.';
import {defaultFontSize} from '../../../styles/font';
import {defaultTheme} from '../../../styles/theme';

export const ButtonContainer = styled.TouchableOpacity`
  background-color: ${defaultTheme.PRIMARY_BUTTON_COLOR};
  padding-horizontal: 12px;
  border-width: 1px;
  width: ${(props: ISectionProps) => props.width || 160}
  height: ${(props: ISectionProps) => props.height || 40}
  border-color: ${(props: ISectionProps) =>
    props.selected
      ? defaultTheme.SELECTED_COLOR
      : defaultTheme.DEFAULT_BORDER_COLOR};
  align-items: center;
  justify-content: center;
  margin-right: 16;
  margin-bottom: 8;
  border-radius: 8;
`;

export const ButtonText = styled.Text`
  color: ${(props: ISectionProps) =>
    props.selected
      ? defaultTheme.SELECTED_COLOR
      : defaultTheme.PRIMARY_TEXT_COLOR};
  font-weight: ${(props: ISectionProps) => (props.selected ? 700 : 'normal')}
  font-size: ${defaultFontSize.MEDIUM};
`;

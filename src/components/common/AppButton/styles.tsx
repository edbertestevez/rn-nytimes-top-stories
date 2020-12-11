import styled from 'styled-components/native';
import {IButtonProps} from '.';
import {defaultFontSize} from '../../../styles/font';
import {defaultTheme} from '../../../styles/theme';

export const ButtonContainer = styled.TouchableOpacity`
  background-color:${(props: IButtonProps) =>
    props.bgColor || defaultTheme.DEFAULT_BACKGROUND_COLOR} ;
  padding-horizontal: 12px;
  border-width: 1px;
  width: ${(props: IButtonProps) => props.width || '160'}px;
  height: ${(props: IButtonProps) => props.height || '40'}px;
  border-color: ${(props: IButtonProps) =>
    props.color || defaultTheme.DEFAULT_BORDER_COLOR}
  align-items: center;
  justify-content: center;
  margin-right: 16px;
  margin-bottom: 8px;
  border-radius: 8px;
`;

export const ButtonText = styled.Text`
  color: ${(props: IButtonProps) =>
    props.color || defaultTheme.DEFAULT_BORDER_COLOR}
  font-size: ${defaultFontSize.MEDIUM}px;
`;

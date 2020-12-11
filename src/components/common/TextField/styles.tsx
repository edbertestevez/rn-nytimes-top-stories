import styled from 'styled-components/native';
import {defaultFontSize} from '../../../styles/font';
import {defaultTheme} from '../../../styles/theme';

export const InputField = styled.TextInput`
  color: ${defaultTheme.PRIMARY_TEXT_COLOR};
  font-size: ${defaultFontSize.MEDIUM}px;
  padding-vertical: 8px;
  padding-horizontal: 12px;
  background-color: ${defaultTheme.PRIMARY_INPUT_BACKGROUND_COLOR};
  border-radius: 8px;
`;

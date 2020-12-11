import React from 'react';
import {ViewStyle} from 'react-native';
import {DEFAULT_TOUCHABLE_OPACITY} from '../../../config/widgets';
import {ButtonContainer, ButtonText} from './styles';

export interface IButtonProps {
  width?: number;
  height?: number;
  color?: string;
  bgColor?: string;
  style: ViewStyle;
}

interface IProps extends IButtonProps {
  label: string;
  onPress: () => void;
}

const AppButton: React.FC<IProps> = (props) => {
  let {label} = props;

  return (
    <ButtonContainer activeOpacity={DEFAULT_TOUCHABLE_OPACITY} {...props}>
      <ButtonText {...props}>{label}</ButtonText>
    </ButtonContainer>
  );
};

export default AppButton;

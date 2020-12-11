import React from 'react';
import {DEFAULT_TOUCHABLE_OPACITY} from '../../../config/widgets';
import {ButtonContainer, ButtonText} from './styles';

export interface ISectionProps {
  width?: number;
  height?: number;
  selected: boolean;
}

interface IProps extends ISectionProps {
  label?: string;
  onPress: () => void;
}

const SectionButton: React.FC<IProps> = (props) => {
  let {label, selected} = props;

  return (
    <ButtonContainer activeOpacity={DEFAULT_TOUCHABLE_OPACITY} {...props}>
      <ButtonText selected={selected}>{label}</ButtonText>
    </ButtonContainer>
  );
};

export default SectionButton;

import React from 'react';
import {InputField} from './styles';
export interface IProps {
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
}

const TextField: React.FC<IProps> = (props) => {
  let {placeholder, value, onChangeText} = props;

  return (
    <InputField
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default TextField;

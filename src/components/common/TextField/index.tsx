import React from 'react';
import {InputField} from './styles';

export interface IProps {
  placeholder?: string;
  value: string;
  onChangeText: (value: string) => void;
  flexRatio: number;
}

const TextField: React.FC<IProps> = (props) => {
  let {placeholder, value, onChangeText, flexRatio} = props;

  return (
    <InputField
      onChangeText={onChangeText}
      value={value}
      placeholder={placeholder}
      style={{flex: flexRatio || 1}}
    />
  );
};

export default TextField;

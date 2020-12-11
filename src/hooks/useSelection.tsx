import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface ISelection {
  key: string;
  label: string;
}
const useSelection = (
  defaultSelect: string = '',
  selection: Array<ISelection>,
) => {
  const [selected, setSelected] = useState<string>(defaultSelect);

  return [selected, setSelected];
};

export default useSelection;

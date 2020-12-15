import React from 'react';

import {ReactText} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, StyleSheet} from 'react-native';
import {ISelectItem} from '../../../types/Input';

interface IProps {
  selectedValue: ReactText;
  selection: Array<ISelectItem>;
  onSelectChange: (itemValue: ReactText, index: number) => void;
  flexRatio?: number;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
  },
});

const SelectField: React.FC<IProps> = ({
  selectedValue,
  selection,
  onSelectChange,
  flexRatio,
}) => {
  return (
    <View style={[styles.container, {flex: flexRatio || 1}]}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, index) => onSelectChange(itemValue, index)}>
        {selection &&
          selection.map(({label, value}) => {
            return <Picker.Item key={value} label={label} value={value} />;
          })}
      </Picker>
    </View>
  );
};

export default SelectField;

import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {IKeyLabel} from '../../../../constants/common';
import {sectionKeys, sectionSelect} from '../../../../constants/sections';
import {defaultFontSize} from '../../../../styles/font';
import {defaultTheme} from '../../../../styles/theme';
import SectionButton from '../../../common/SectionButton';

const Sections: React.FC = () => {
  const [selected, setSelected] = useState<string>(sectionKeys.world);
  const firstRow = sectionSelect.slice(0, 13);
  const secondRow = sectionSelect.slice(13);

  useEffect(() => {
    console.log('Call NYTimes API for section: ', selected);
  }, [selected]);

  const renderRow = (rows: Array<IKeyLabel>) => {
    return rows.map((item) => {
      return (
        <SectionButton
          onPress={() => setSelected(item.key)}
          selected={selected === item.key}
          label={item.label}
        />
      );
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Section</Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={styles.scrollArea}>
        <View>
          <View style={styles.sectionRow}>{renderRow(firstRow)}</View>
          <View style={styles.sectionRow}>{renderRow(secondRow)}</View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Sections;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    backgroundColor: defaultTheme.DEFAULT_BACKGROUND_COLOR,
  },
  title: {
    fontSize: defaultFontSize.TITLE,
    paddingLeft: 12,
  },
  scrollArea: {
    paddingVertical: 12,
  },
  sectionRow: {
    flexDirection: 'row',
    paddingLeft: 12,
  },
});

import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import SectionButton from '../../../common/SectionButton';

import {defaultFontSize} from '../../../../styles/font';
import {defaultTheme} from '../../../../styles/theme';

import {IKeyLabel} from '../../../../constants/common';
import {sectionSelect} from '../../../../constants/sections';
import {newsSliceActions} from '../../../../store/slices/news';
import {RootState} from '../../../../store';

const Sections: React.FC = () => {
  const sectionFilter = useSelector(
    (state: RootState) => state.news.sectionFilter,
  );
  const dispatch = useDispatch();

  const firstRow = sectionSelect.slice(0, 13);
  const secondRow = sectionSelect.slice(13);

  const onSectionChange = (section: string) => {
    dispatch(newsSliceActions.setSectionFilter(section));
  };

  const renderRow = (rows: Array<IKeyLabel>) => {
    return rows.map((item) => {
      return (
        <SectionButton
          key={item.key}
          onPress={() => onSectionChange(item.key)}
          selected={sectionFilter === item.key}
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
    paddingTop: 12,
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

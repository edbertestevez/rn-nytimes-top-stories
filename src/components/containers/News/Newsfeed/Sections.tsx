import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';
import {useDispatch, useSelector} from 'react-redux';

import SectionButton from '../../../common/SectionButton';

import {defaultFontSize} from '../../../../styles/font';
import {defaultTheme} from '../../../../styles/theme';

import {IKeyLabel} from '../../../../constants/common';
import {sectionSelect} from '../../../../constants/sections';
import {newsSliceActions} from '../../../../store/slices/news';
import {RootState} from '../../../../store';

//Styled Definition
const Container = styled.View`
  padding-top: 12px;
  background-color: ${defaultTheme.DEFAULT_BACKGROUND_COLOR};
`;

const Title = styled.Text`
  font-size: ${defaultFontSize.TITLE}px;
  padding-left: 12px;
`;

const ScrollArea = styled.ScrollView`
  padding-vertical: 12px;
`;

const SectionRow = styled.View`
  flex-direction: row;
  padding-left: 12px;
`;

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
    <Container>
      <Title>Section</Title>
      <ScrollArea showsHorizontalScrollIndicator={false} horizontal={true}>
        <View>
          <SectionRow>{renderRow(firstRow)}</SectionRow>
          <SectionRow>{renderRow(secondRow)}</SectionRow>
        </View>
      </ScrollArea>
    </Container>
  );
};

export default Sections;

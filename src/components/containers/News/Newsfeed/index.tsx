import React from 'react';
import {View} from 'react-native';
import NewsList from './NewsList';
import Sections from './Sections';

const Newsfeed: React.FC = () => {
  return (
    <View>
      <Sections />
      <NewsList />
    </View>
  );
};

export default Newsfeed;

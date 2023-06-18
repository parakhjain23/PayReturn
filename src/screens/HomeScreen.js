import {View, Text} from 'react-native';
import React from 'react';
import Algolia from './Algolia';
import ImagePicker from './ImagePicker';
import ConfettiComponent from './Confetti';

const HomeScreen = () => {
  return (
    <View>
      <View>
        <Algolia />
        {/* <ImagePicker /> */}
        {/* <ConfettiComponent /> */}
      </View>
    </View>
  );
};

export default HomeScreen;

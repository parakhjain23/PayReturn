import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import Algolia from './src/screens/Algolia';
import {View} from 'react-native';
import 'react-native-gesture-handler';
import 'react-native-screens';
import Navigation from './src/screens/Navigation';

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    // <View>
    //   <Algolia />
    // </View>
    <Navigation />
  );
};

export default App;

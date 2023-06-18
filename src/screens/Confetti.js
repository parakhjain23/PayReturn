import {View, Text} from 'react-native';
import React, {useRef, useEffect} from 'react';
import ConfettiCannon from 'react-native-confetti-cannon';
import Confetti from 'react-native-confetti';
const ConfettiComponent = () => {
  const confettiRef = useRef();
  console.log('in confetti');
  useEffect(() => {
    // confettiRef?.current?.startConfetti();
    confettiRef?.current?.start();
  }, []);

  return (
    <>
      {/* <Confetti ref={confettiRef} timeout={1} /> */}
      <ConfettiCannon
        ref={confettiRef}
        count={200}
        origin={{x: -10, y: 10}}
        autoStart={true}
        explosionSpeed={1000}
        fadeOut={true}
      />
    </>
    // <Conf
    // <View style={{flex: 1, justifyContent: 'center'}}>
    //   <Text>Confetti</Text>
    // </View>
  );
};

export default ConfettiComponent;

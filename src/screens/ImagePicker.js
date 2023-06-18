import {View, Text, Button} from 'react-native';
import React, {useEffect, useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ConfettiComponent from './Confetti';

const pickImageFromCamera = setData => {
  const options = {
    mediaType: 'photo',
    quality: 0.5,
  };
  launchCamera(options, data => {
    // console.log(data, '=-=-=--');
    setData(data.assets);
  });
};
const pickImageFromGallery = setData => {
  const options = {
    mediaType: 'photo',
    quality: 0.5,
    // selectionLimit: 10,
  };
  launchImageLibrary(options, data => {
    // console.log(data, '=-=-=--');
    setData(data.assets);
  });
};
const ImagePicker = () => {
  const [data, setData] = useState([]);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setData([]);
  //   }, 10000);
  // }, [data]);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <Text style={{textAlign: 'center'}}>ImagePicker</Text>
      <View style={{margin: 10}}>
        <Button
          title="Open Camera"
          onPress={() => {
            pickImageFromCamera(setData);
          }}
        />
      </View>
      <Button
        title="Pick Document From Gallery"
        onPress={() => {
          pickImageFromGallery(setData);
        }}
      />
      {data?.length > 0 && <ConfettiComponent />}
    </View>
  );
};

export default ImagePicker;

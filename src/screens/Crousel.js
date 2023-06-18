import React from 'react';
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {animatedStyles, scrollInterpolator} from '../utils/animations';
const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 3) / 4);
const Crousel = () => {
  const DATA = [
    {
      id: 1,
      name: 'parakh',
      url: 'https://previews.123rf.com/images/alenast/alenast1712/alenast171200065/91538649-sketch-hand-drawn-fast-food-menu-food-items-for-menu-design-advertising-or-packaging-modern.jpg',
    },
    {
      id: 2,
      name: 'nirakh',
      url: 'https://cdn3.mydukaan.io/app/image/700x700/?url=https://dukaan-us.s3.amazonaws.com/5176741/a65b090a-f915-4fc3-9af9-128e3401445e/aw1-5ad3ccea-97d9-4de8-9881-ebc6d0c715de.jpg',
    },
    {
      id: 3,
      name: 'rudra',
      url: 'https://previews.123rf.com/images/vectomart/vectomart1912/vectomart191200123/135697995-illustration-of-template-of-different-types-of-breakfast-item-for-menu-background-design-of.jpg',
    },
  ];
  const renderItem = ({item}) => {
    console.log(item, '-==-=');
    return (
      <View style={[styles.itemContainer]}>
        <ImageBackground
          source={{
            uri: item?.url,
          }}
          style={{width: '97%', height: '90%'}}
        />
        {/* <Text style={styles.itemLabel}>{`Item ${item?.name}`}</Text> */}
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {/* <Text>Crousel</Text> */}
      <Carousel
        data={DATA}
        renderItem={renderItem}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        containerCustomStyle={styles.carouselContainer}
        inactiveSlideShift={0}
        scrollInterpolator={scrollInterpolator}
        slideInterpolatedStyle={animatedStyles}
        useScrollView={true}
      />
    </View>
  );
};

export default Crousel;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  carouselContainer: {
    marginTop: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  itemLabel: {
    color: 'white',
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

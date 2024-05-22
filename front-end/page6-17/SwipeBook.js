import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
// import Page12 from './Page12'; // Import the Page12 component
import Page6v2 from './Page6V2';
import Page7 from './Page7';
import Page8 from './Page8';
const { width: screenWidth } = Dimensions.get('window');

const SwipeBook = () => {
  const carouselRef = useRef(null);

  const data = [
    { key: 'page1', component: <Page6v2 /> },
    // Add more pages as needed
    { key: 'page2', component: <Page7 /> },
    { key: 'page3', component: <Page8 /> },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.pageContainer}>
      {item.component}
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
      />
    </View>
  );
};

export default SwipeBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  pageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

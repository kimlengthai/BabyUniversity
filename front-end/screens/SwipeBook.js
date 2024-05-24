import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';

import Page6v2 from '../BookPages/Page6V2'
import Page7 from '../BookPages/Page7'
import Page8 from '../BookPages/Page8'
import Page9 from '../BookPages/Page9'
import Page10 from '../BookPages/Page10'
import Page11 from '../BookPages/Page11'
import Page12 from '../BookPages/Page12'
import Page13 from '../BookPages/Page13'
import Page14 from '../BookPages/Page14'
import Page15 from '../BookPages/Page15'
import Page16 from '../BookPages/Page16'
import Page17 from '../BookPages/Page17'
import Page18 from '../BookPages/page18'
import Page19 from '../BookPages/page19'  
import Page20 from '../BookPages/page20'  
import Page21 from '../BookPages/page21'
import Page22 from '../BookPages/page22'
import Page23 from '../BookPages/page23'
import Page24 from '../BookPages/page24'


const { width: screenWidth } = Dimensions.get('window');

const SwipeBook = () => {
  const carouselRef = useRef(null);

  const data = [
    { key: 'page6', component: <Page6v2 /> },
    // Add more pages as needed
    { key: 'page7', component: <Page7 /> },
    { key: 'page8', component: <Page8 /> },
    { key: 'page9', component: <Page9 /> },
    { key: 'page10', component: <Page10 /> },
    { key: 'page11', component: <Page11 /> },
    { key: 'page12', component: <Page12 /> },
    { key: 'page13', component: <Page13 /> },
    { key: 'page14', component: <Page14 /> },
    { key: 'page15', component: <Page15 /> },
    { key: 'page16', component: <Page16 /> },
    { key: 'page17', component: <Page17 /> },
    { key: 'page18', component: <Page18 /> },
    { key: 'page19', component: <Page19 /> },
    { key: 'page20', component: <Page20 /> },
    { key: 'page21', component: <Page21 /> },
    { key: 'page22', component: <Page22 /> },
    { key: 'page23', component: <Page23 /> },
    { key: 'page24', component: <Page24 /> },
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

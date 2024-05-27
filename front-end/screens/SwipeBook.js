import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Button } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import { Audio } from 'expo-av';
import { useReadAloud } from '../SettingsScreen/Storage';// used to keep track to ensure slider option for read aloud is set to true or false

import Page0 from '../BookPages/page0'
import Page1 from '../BookPages/page1' 
import Page2 from '../BookPages/page2'
import Page3 from '../BookPages/page3'
import Page4 from '../BookPages/page4'
import Page5 from '../BookPages/page5'
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

const SwipeBook = (isMuted) => {
  const carouselRef = useRef(null);
  const [sound, setSound] = useState();
  const { readAloudVal } = useReadAloud();
  
  const pageNum = 0;

  const data = [
    { key: 'page0', component: <Page0 /> },
    { key: 'page1', component: <Page1 /> },
    { key: 'page2', component: <Page2 /> },
    { key: 'page3', component: <Page3 /> },
    { key: 'page4', component: <Page4 /> },
    { key: 'page5', component: <Page5 /> },
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

  const audioPaths = {
    "paths": [
      require('../assets/booksAudio/bookaudio0.mp3'),
      require('../assets/booksAudio/bookaudio1.mp3'),
      require('../assets/booksAudio/bookaudio2.mp3'),
      require('../assets/booksAudio/bookaudio3.mp3'),
      require('../assets/booksAudio/bookaudio4.mp3'),
      require('../assets/booksAudio/bookaudio5.mp3'),
      require('../assets/booksAudio/bookaudio6.mp3'),
      require('../assets/booksAudio/bookaudio7.mp3'),
      require('../assets/booksAudio/bookaudio8.mp3'),
      require('../assets/booksAudio/bookaudio9.mp3'),
      require('../assets/booksAudio/bookaudio10.mp3'),
      require('../assets/booksAudio/bookaudio11.mp3'),
      require('../assets/booksAudio/bookaudio12.mp3'),
      require('../assets/booksAudio/bookaudio13.mp3'),
      require('../assets/booksAudio/bookaudio14.mp3'),
      require('../assets/booksAudio/bookaudio15.mp3'),
      require('../assets/booksAudio/bookaudio16.mp3'),
      require('../assets/booksAudio/bookaudio17.mp3'),
      require('../assets/booksAudio/bookaudio18.mp3'),
      require('../assets/booksAudio/bookaudio19.mp3'),
      require('../assets/booksAudio/bookaudio20.mp3'),
      require('../assets/booksAudio/bookaudio21.mp3'),
      require('../assets/booksAudio/bookaudio22.mp3'),
      require('../assets/booksAudio/bookaudio23.mp3'),
      require('../assets/booksAudio/bookaudio24.mp3'),
    ]
  }

  async function playBookSound(index) {
    if (readAloudVal) {
      const { sound } = await Audio.Sound.createAsync(audioPaths['paths'][index]);
      setSound(sound);
      await sound.playAsync();
    }
  }

  useEffect(() => {
    return sound ? () => {
      sound.unloadAsync();
    } : undefined;
  }, [sound]);

  const renderItem = ({ item }) => (
    <View style={styles.pageContainer}>
      {item.component}
    </View>
  );
  async function playSwipeSound() {
    const { sound } = await Audio.Sound.createAsync(require('../assets/booksSFX/PageSwipe_SoundEffect.mp3'));
    setSound(sound);
    await sound.playAsync();
  }


  return (
    <View style={styles.container}>
      <Carousel
        ref={carouselRef}
        data={data}
        renderItem={renderItem}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout={'default'}
        onBeforeSnapToItem={playSwipeSound}
        onSnapToItem={(index) => playBookSound(index)}
      />
    </View>
  );
};



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
export default SwipeBook;
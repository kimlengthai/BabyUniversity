import React, { useState } from 'react';
import { View, Text, Switch, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useReadAloud } from './Storage';
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';

const SettingsScreen = ({ navigation }) => {
  const { readAloudVal, setReadAloudVal } = useReadAloud();
  const [quizVal, setQuizVal] = useState(false);
  const [fontsLoaded] = useFonts({ Itim_400Regular });
  const [sliderValue, setSliderValue] = useState(0);


  const readAloud = () => setReadAloudVal(prevState => !prevState);
  const quiz = () => setQuizVal(prevState => !prevState);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  const handleSliderChange = (value) => {
    setSliderValue(value);
  };

  return (
    <ImageBackground source={require('../assets/BgImage/doodle.png')} style={styles.background}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Image source={require('../assets/settingsImages/back_button.png')} style={styles.back} />
      </TouchableOpacity>
      <Text style={styles.title}>Books Settings</Text>
      <View style={styles.optionContainer}>
        <View style={styles.option}>
          
          <Text style={styles.optionText}>Read Aloud</Text>
          <Image source={require('../assets/settingsImages/read_aloud_icon.png')} style={styles.icon} />
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={readAloudVal ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={readAloud}
            value={readAloudVal}
            style={styles.switch}
          />
        </View>
        <View style={styles.option}>
          
          <Text style={styles.optionText}>Quizzes</Text>
          <Image source={require('../assets/settingsImages/quiz_icon.png')} style={styles.icon} />
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={quizVal ? '#FFFFFF' : '#FFFFFF'}
            onValueChange={quiz}
            value={quizVal}
            style={styles.switch}
          />
        </View>
        <View style={styles.option}>
         
          <Text style={styles.optionText}>Text Size</Text>
          <Image source={require('../assets/settingsImages/text_size_icon.png')} style={[styles.icon, { width: 50 + (sliderValue * 20), height: 50 + (sliderValue * 20) }]} />
          <Slider
            style={styles.slider}
            minimumTrackTintColor='#81b0ff'
            thumbTintColor='#81b0ff'
            onValueChange={handleSliderChange}
            value={sliderValue}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    background: {
      flex: 1,
      resizeMode: 'cover',
      width: WIDTH,
      height: HEIGHT,
      backgroundColor: '#D8EEF7',
      justifyContent: 'center', // Align items in the center vertically
    },
    backButton: {
      position: 'absolute',
      top: 60,
      left: 60,
    },
    back: {
      width: 70, // Increase the width
      height: 70, // Increase the height
     
    },
    title: {
      color: '#3F3CB4',
      fontSize: 60, // Increase the font size
      textAlign: 'center',
      marginTop: 0,
      fontFamily: 'Itim_400Regular',
    },
    optionContainer: {
      marginTop: 50,
      alignItems: 'center',
    },
    option: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 30, // Increase the margin bottom
    },
    icon: {
      width: 50, // Increase the width
      height: 50, // Increase the height
      marginRight: 30, // Increase the margin right
    },
    optionText: {
      fontSize: 40, // Increase the font size
      marginRight: 30,
      fontFamily: 'Itim_400Regular',
     
    },
    switch: {
      marginLeft: 'auto',
      transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Increase the size of the switch
    },
    slider: {
      width: 300, // Increase the width
      height: 40,
      marginLeft: 20, // Adjust margin left
    },
  });
  

export default SettingsScreen;

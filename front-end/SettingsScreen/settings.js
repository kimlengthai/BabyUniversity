import { React, useState, useEffect } from 'react';
import { View, Text, Button, Switch, Image, ImageBackground, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import { useFonts, Itim_400Regular } from '@expo-google-fonts/itim';

const SettingsScreen = ({ navigation }) => {
    const [isMuted, setIsMuted] = useState(false);
    const toggleMute = () => setIsMuted(previousState => !previousState);

    const [readAloudVal, setReadAloud] = useState(false);
    const [quizVal, setQuizVal] = useState(false);
    const readAloud = () => setReadAloud(previousState => !previousState);
    const quiz = () => setQuizVal(previousState => !previousState);

    const [range, setRange] = useState('50%');
    const [sliding, setSliding] = useState('inactive');

    let [fontsLoaded] = useFonts({ Itim_400Regular });

    if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

    return (
        <ImageBackground source={require('../assets/BgImage/doodle.png')} style={styles.background}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image source={require('../assets/settingsImages/back_button.png')} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.title}>Book Settings</Text>
            <View style={[styles.container, { alignItems: 'center' }]} >
                <Text style={styles.heading}>Read Aloud</Text>
                <Text style={styles.heading}>Quizzes</Text>
                <Text style={styles.heading}>Text Size</Text>
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 95
                }}
            />
            <View style={styles.container} >
                <Image
                    source={require('../assets/settingsImages/read_aloud_icon.png')}
                    style={styles.icon}
                />
                <Image
                    source={require('../assets/settingsImages/quiz_icon.png')}
                    style={styles.icon}
                />
                <Image
                    source={require('../assets/settingsImages/text_size_icon.png')}
                    style={styles.icon}
                />
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 75
                }}
            />
            <View style={[styles.container, { gap: 23 }]} >
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={readAloudVal ? '#FFFFFF' : '#FFFFFF'}
                    onValueChange={readAloud}
                    value={readAloudVal}
                    style={styles.setting}
                />
                <Switch
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={quizVal ? '#FFFFFF' : '#FFFFFF'}
                    onValueChange={quiz}
                    value={quizVal}
                    style={styles.setting}
                />
                <Slider
                    style={[{ width: 250, height: 40 }, { marginLeft: 300 }, { top: 20 }]}
                    minimumTrackTintColor='#81b0ff'
                    thumbTintColor='#81b0ff'
                />
            </View>
            <View
                style={{
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                    marginTop: 75
                }}
            />
        </ImageBackground>
    );
};

const WIDTH = Dimensions.get('screen').width;
const HEIGHT = Dimensions.get('screen').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        marginTop: 100,
        marginLeft: 50,
        alignItems: 'flex-start',
        gap: 30
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    background: {
        flex: 1,
        resizeMode: 'cover',
        width: WIDTH,
        height: HEIGHT,
        backgroundColor: '#D8EEF7'
    },
    title: {
        position: 'absolute',
        color: '#3F3CB4',
        fontSize: 50,
        textAlign: 'center',
        marginLeft: 150,
        fontFamily: 'Itim_400Regular',
        left: 280,
        top: 15,
    },
    heading: {
        color: 'black',
        fontSize: 30,
        fontFamily: 'Itim_400Regular',
        marginTop: 10,
        top: -15,
    },
    icon: {
        width: 40,
        height: 40,
        marginLeft: 180,
        resizeMode: 'contain',
    },
    back: {
        width: 40,
        height: 40,
        marginLeft: 15,
        marginTop: 15
    },
    setting: {
        marginLeft: 300,
        top: -5,
        marginTop: 10,
    }
});

export default SettingsScreen;
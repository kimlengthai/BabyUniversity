import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Import your images using ES6 import syntax
import userIcon from './assets/menuImages/userIcon.png';
import settingsIcon from './assets/menuImages/settings.png';
import kidIcon from './assets/menuImages/kidIcon.png';
import logoutIcon from './assets/menuImages/logoutIcon.png';
import toggleButtonIcon from './assets/menuImages/toggleButton.png';
import parentsIcon from './assets/menuImages/parents.png';


const MenuButton = ({ userMode, onOptionPress }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (userMode === 'parents') {
      if (option === 'Parents Mode') {
        console.log(option);
        navigation.navigate('PinEntry');
      } else if (option === 'Settings') {
        console.log(option);
        navigation.navigate('Settings');
        // navigate to the settings view page
      }
    } else {
      if (option === 'Switch to Kids mode') {
        console.log(option);
        navigation.navigate('Bedroom')
        // switch to kids bedroom view page
      } else if (option === 'Settings') {
        console.log(option);
        navigation.navigate('Settings');
        // switch to settings view page
      } else if (option === 'Logout') {
        console.log(option);
        navigation.navigate('Logout')
        // logout the user
      }
      if (option === 'UserName') {
        console.log(option);
        navigation.navigate('UserName')
        // switch to kids bedroom view page
      }
    }
  };

  // Options for parents mode
  const parentOptions = [
    { label: 'UserName', image: userIcon },
    { label: 'Settings', image: settingsIcon },
    { label: 'Parents Mode', image: parentsIcon },
  ];

  // Options for kids mode
  const kidsOptions = [
    { label: 'UserName', image: userIcon },
    { label: 'Switch to Kids mode', image: kidIcon },
    { label: 'Settings', image: settingsIcon },
    { label: 'Logout', image: logoutIcon },
  ];

  const options = userMode === 'parents' ? parentOptions : kidsOptions;

  return (
    <View style={styles.containerForMenu}>
      <TouchableOpacity onPress={toggleMenu} style={styles.toggleButton}>
        <Image source={toggleButtonIcon} style={styles.toggleImage} />
      </TouchableOpacity>

      {isOpen && (
        <View style={styles.optionsContainer}>
          {options.map((option, index) => (
            <TouchableOpacity
              key={index}
              style={[styles.option, index === options.length - 1 && { borderBottomWidth: 0 }]}
              onPress={() => handleOptionClick(option.label)}
            >
              <View style={styles.imageContainer}>
                <Image source={option.image} style={styles.optionImage} />
              </View>
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  containerForMenu: {
    position: 'absolute',
    top: 35,
    left: 30,
    zIndex: 1,
  },
  toggleButton: {
    backgroundColor: 'transparent',
    borderRadius: 5,
    color: '#898A8D',
  },
  toggleImage: {
    width: 41,
    height: 31,
  },
  optionsContainer: {
    marginTop: 5,
    backgroundColor: 'lightgray',
    borderRadius: 15,
    marginLeft: 25,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingRight: 60,
  },
  imageContainer: {
    width: 47,
    height: 44,
    marginRight: 10,
  },
  optionImage: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'contain',
  },
});

export default MenuButton;

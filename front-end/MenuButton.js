import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const MenuButton = ({ userMode, onOptionPress }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  
    const handleOptionClick = (option) => {
      // onOptionPress(option);
      // toggleMenu();
      // handle the option that is clicked
      if(userMode === 'parents'){
          if(option === 'Switch to parents mode'){
              console.log(option);
              // navigate to the parent vivew page
          }
          else if(option === 'Settings'){
              console.log(option);
              // navigate to the setting vivew page
          }
      }else{
          if(option === "Switch to Kids mode"){
              console.log(option);
              // switch to kids bedrom view page
          }
          else if(option === 'Settings'){
              console.log(option)
              // switch to settings view page
          }else if(option === 'Logout'){
              console.log(option);
              /// logout the user
          }
      }
    };
  
  //   options for parents mode
    const parentOptions = [
      {label: 'UserName', image: require('./assets/menuImages/userIcon.png')},
      {label: 'Settings', image: require('./assets/menuImages/settings.png') },
      
    ];
  // options for kids mode
    const kidsOptions = [
      {label: 'UserName', image: require('./assets/menuImages/userIcon.png')},
      {label: 'Switch to Kids mode', image: require('./assets/menuImages/kidIcon.png')},
      {label: 'Settings', image: require('./assets/menuImages/settings.png')},
      {label: 'Logout', image: require('./assets/menuImages/logoutIcon.png')},
    ];
  
    const options = userMode === 'parents' ? parentOptions : kidsOptions;
  
    return (
        
      <View style={styles.containerForMenu}>
        <TouchableOpacity onPress={toggleMenu} style={styles.toggleButton}>
          <Image
            source={require('./assets/menuImages/toggleButton.png')}
            style={styles.toggleImage}
          />
        </TouchableOpacity>
  
        {/* check if the toggle button is clicked  */}
  
        {isOpen && (
  
          // if clicked display the options
          <View style={styles.optionsContainer}>
            {options.map((option, index) => (
              <TouchableOpacity
                key={index}
                style={[
                  styles.option, 
                  index === options.length -1 && {borderBottomWidth: 0}  
                  ]}
                onPress={() => handleOptionClick(option.label)}
              >
              <View style = {styles.imageContainer}>
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
        paddingRight: 60
        
      },
      imageContainer: {
        width: 47,
        height: 44,
        marginRight: 10
      },
      optionImage: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: 'contain'
      },
  });

  export default MenuButton;
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const Page4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.mycanvas}>
        <View style={styles.ball}></View>
        <View style={styles.shadow}></View>
      </View>
      <Text style={{ color: 'white', fontSize: 70 }}> <Text style={{ color: 'white',fontSize: 70  }}>This ball has </Text> have  <Text style={{ color: 'blue',fontSize: 70  }}>zero energy.</Text></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e1919',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mycanvas: {
    margin: 300,
    alignItems: 'center',
    justifyContent: 'center',
    width: 500,
    height: 500,
  },
  ball: {
    backgroundColor: '#004dc7',
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 1,
    position: 'absolute',
    top: 170,
    zIndex: 1,
    shadowColor: '#004dc7',
    shadowOffset: { width: 15, height: 15 },
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 5,
  },
  shadow: {
    width: 150,
    height: 30,
    position: 'absolute',
    top: 800,
    zIndex: -1,
    borderRadius: '40% 40% 50% 50%',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 7,
    elevation: 5,
  },
  footer: {
    position: 'absolute',
    top: '70%',
    left: '17%',
    fontSize: 60,
    color: 'white',
  },
  bodyText: {
    position: 'absolute',
    zIndex: 100,
    bottom: 30,
    fontWeight: '700',
    color: 'white',
    

  }

});

export default Page4;

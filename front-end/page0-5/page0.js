import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CircleAnimation from './components/CircleAnimation';
import Page1 from './page1'

export default function Page0() {
  const [showPage1, setShowPage1 ] = useState(false); //Create a variable for going to page 19

  /* A handler of navigating to page 19 */
  const goToPage1 = () => 
    {
      setShowPage1(true);
    };
    if (showPage1) 
      {
        /* If showPage19 is true, render Page19 */
        /* If false, nothing is rendered. */
        return <Page1 goToPage1={() => setShowPage1(false)} />;
      }
  return (
    <View style={styles.container}>
      {/* text */}
      <Text style={{ color: 'red', fontSize: 100, marginTop: 50 }}>Quantum <Text style={{ color: 'blue' }}>Physics.</Text></Text>
      <Text style={{ color: 'white', fontSize: 100, marginTop: 50 }}>for <Text style={{ color: 'yellow' }}>Babies.</Text></Text>
      <View style={{ flex: 1 }}>
        <CircleAnimation />
      </View>
      <View style={styles.text}>
        <Text style={{ color: 'white', fontSize: 50 }}>By <Text style={{ color: 'white' }}>Chris Ferrie.</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'black',
  },
  text: {
    position: 'absolute',
    zIndex: 100,
    bottom: 50,
    fontWeight: '700',
  },
});

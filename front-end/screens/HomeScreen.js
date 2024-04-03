import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {

    const navigation = useNavigation();
    // signout user
    const handleSignOut = ()=>{
        auth
        .signOut()
        .then(()=>{
            navigation.replace("Login")
        })
        .catch(error => alert(error.message))
    }

  return (
    <View 
    style = {styles.container}
    >
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={handleSignOut}
        style= {styles.button}
        >
            <Text style= {styles.buttonText}>SignOut</Text>
        </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        // width: '100%',
        backgroundColor: 'blue',
        paddingVertical : 15,
        paddingHorizontal: 50,   
        borderRadius: 20,
        alignItems: 'center',
        marginBottom: 20,
    
    
      },
        buttonText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
       
    
      },
})
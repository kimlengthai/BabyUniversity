import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, Button, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import UIBallAnimation from '../ballAnimation/ballAnimation';
import { auth } from '../firebase'; // Make sure the path to your firebase config is correct

const LoginScreen = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoginClicked, setIsLoginClicked] = useState(false);

    const navigation = useNavigation();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                navigation.navigate("Bedroom");
            }
        });
        return unsubscribe;
    }, []);

    const handleSignup = () => {
        navigation.navigate('SignUp');
    };

    const handleLogin = () => {
        setIsLoginClicked(true);
        auth
            .signInWithEmailAndPassword(username, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log("Logged in with user", user.email);
                navigation.navigate('Bedroom');
            })
            .catch(error => alert(error.message))
            .finally(() => setIsLoginClicked(false));
    };

    return (
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <View style={styles.ballAnimationContainer}>
                <UIBallAnimation />
            </View>
            <View style={styles.inputContainer}>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Username:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your username"
                        value={username}
                        onChangeText={text => setUsername(text)}
                    />
                </View>
                <View style={styles.inputRow}>
                    <Text style={styles.label}>Password:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your password"
                        secureTextEntry
                        value={password}
                        onChangeText={text => setPassword(text)}
                    />
                </View>
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.button}
                    disabled={isLoginClicked} // Disable button when login is clicked
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={handleSignup}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Create Account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    ballAnimationContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 0,
    },
    inputContainer: {
        width: '50%',
        marginTop: 200,
    },
    inputRow: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
    },
    label: {
        marginRight: 20,
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 20,
        borderRadius: 15,
        color: 'black',
        fontSize: 18,
        backgroundColor: 'white'
    },
    buttonContainer: {
        width: '30%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    },
    button: {
        backgroundColor: 'blue',
        paddingVertical: 15,
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
});

export default LoginScreen;

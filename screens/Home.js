import React, { useState } from 'react';
import { TouchableOpacity, View, Linking, TextInput, Button, Alert, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';

export default function HomeScreen(props) {

    return (
        <View>
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")} >
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 0 }}>Register</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")} >
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 0 }}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingBottom: 20,
        marginTop: -30,
    },
    input: {
        height: 40,
        width: 320,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 5,
        paddingLeft: 10,
    },
    loading: {
        marginTop: 10,
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
        marginTop: 60,
    },
    button: {
        width: 320,
        backgroundColor: 'purple',
        borderRadius: 8,
    },
    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    Button: {
        height: 40,
        width: 250,
        borderWidth: 1,
        borderColor: 'purple',
        borderRadius: 19,
        marginTop: 30,
        paddingTop: 10

    }
});
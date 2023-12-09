import React, { useState } from 'react';
import { TouchableOpacity, View, Linking, TextInput, Button, Alert, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';

export default function HomeScreen(props) {
    const [credentials, setCredentials] = useState({
        "full_name": "francis gill",
        "phone_number": "0554501484",
        "password": "secret",
        "password_confirmation": "secret"
    });
    const [loading, setLoading] = useState(false); // New state to handle loading

    const handleInputChange = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };

    const handleRegister = async () => {
        setLoading(true);


        const apiUrl = 'https://backend.florencetech.online/api/register';

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                body: JSON.stringify(credentials),
            });

            setLoading(false);

            let { message } = await response.json();

            if (!response.ok) {
                Alert.alert('Error', message);

                return;
            }

            Alert.alert("Success", "Your account has been registered");

        } catch (error) {
            setLoading(false);
            console.error('API Error:', error);
            // Handle API call errors
        }
    };
    const handlePress = async () => {
        const url = 'https://www.google.com'; // Replace with your desired URL
        try {
            const supported = await Linking.canOpenURL(url);

            if (supported) {
                await Linking.openURL(url);
            } else {
                console.log("Don't know how to open URL: " + url);
            }
        } catch (error) {
            console.error('Error opening the link: ', error);
        }
    };

    return (
        <View style={styles.container}>

            <Image source={require('../assets/circle.jpg')} style={styles.image} />

            <Text >Welcome to App</Text>

            <TextInput
                style={styles.input}
                placeholder="full name"
                onChangeText={(value) => handleInputChange('full_name', value)}
                value={credentials.full_name}
            />
            <TextInput
                style={styles.input}
                placeholder="phone number"
                onChangeText={(value) => handleInputChange('phone_number', value)}
                value={credentials.phone_number}
            />
            <TextInput
                style={styles.input}
                placeholder="password"
                onChangeText={(value) => handleInputChange('password', value)}
                value={credentials.password}
                secureTextEntry
            />
            <TextInput
                style={styles.input}
                placeholder="confirm password"
                onChangeText={(value) => handleInputChange('password_confirmation', value)}
                value={credentials.password_confirmation}
                secureTextEntry
            />
            <TouchableOpacity onPress={handleRegister} disabled={loading} style={styles.button}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>
            {/* <Button style={styles.button} title="Submit" color='purple' onPress={handleRegister} disabled={loading} /> */}
            {loading && <ActivityIndicator style={styles.loading} size="small" color="#0000ff" />}
            <TouchableOpacity onPress={() => props.navigation.navigate("Login")} >
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 20 }}>Existing user? Click to login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 20 }}>Home Page</Text>
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
        width: 250,
        height: 250,
        resizeMode: 'contain',
        marginTop: 30,
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
import React, { useState } from 'react';
import { TouchableOpacity, View, Linking, TextInput, Button, Alert, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';

export default function HomeScreen(props) {
    const [credentials, setCredentials] = useState({
        "phone_number": "03108559858",
        "password": "secret",
    });
    const [loading, setLoading] = useState(false); // New state to handle loading

    const handleInputChange = (name, value) => {
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async () => {
        setLoading(true);


        const apiUrl = 'https://backend.florencetech.online/api/login';

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

            Alert.alert("Success", "Your account has been Logged In");

        } catch (error) {
            setLoading(false);
            console.error('API Error:', error);
            // Handle API call errors
        }
    };

    return (
        <View style={styles.container}>
            <Image source={require('../assets/circle.jpg')} style={styles.image} />

            <Text >Welcome to App</Text>

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
            <TouchableOpacity onPress={handleLogin} disabled={loading} style={styles.button}>
                <View style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Submit</Text>
                </View>
            </TouchableOpacity>
            {/* <Button style={styles.button} title="Submit" color='purple' onPress={handleLogin} disabled={loading} /> */}
            {loading && <ActivityIndicator style={styles.loading} size="small" color="#0000ff" />}
            {/* <Text style={{ marginTop: 10 }}>C?</Text> */}
            <TouchableOpacity onPress={() => props.navigation.navigate("Register")} >
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 20 }}>Dont have account? Signup here</Text>
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
        marginTop: -100,
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

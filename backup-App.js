import React, { useState } from 'react';
import { TouchableOpacity, View, TextInput, Button, Alert, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: 'master@hrms.com',
    password: 'secret',
  });
  const [loading, setLoading] = useState(false); // New state to handle loading

  const handleInputChange = (name, value) => {
    setCredentials({ ...credentials, [name]: value });
  };

  const handleLogin = () => {
    setLoading(true); // Set loading to true when login is initiated

    // Replace this URL with your authentication API endpoint
    const apiUrl = 'https://backend.florencetech.online/api/login';

    // Make an API call to verify credentials
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    })
      .then((response) => {
        setLoading(false); // Set loading to false after response

        if (response.ok) {
          // Authentication successful
          Alert.alert('Success', 'Logged in!');
        } else {
          // Authentication failed
          Alert.alert('Error', 'Invalid username or password');
        }
      })
      .catch((error) => {
        setLoading(false); // Set loading to false in case of an error
        // Handle API call errors
        console.error('API Error:', error);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')} style={styles.image} />
      <Text style={styles.text}>Beauty Parlor</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        onChangeText={(value) => handleInputChange('username', value)}
        value={credentials.username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(value) => handleInputChange('password', value)}
        value={credentials.password}
        secureTextEntry // Hides entered text
      />
      <View style={{ marginTop: 0, marginBottom: 20, width: 320, alignItems: 'flex-end' }}>
        <Text>Forgot Password?</Text>
      </View>


      <TouchableOpacity onPress={handleLogin} disabled={loading} style={styles.button}>
        <View style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
      {/* <Button style={styles.button} title="Submit" color='purple' onPress={handleLogin} disabled={loading} /> */}
      {loading && <ActivityIndicator style={styles.loading} size="small" color="#0000ff" />}
      <Text style={{ marginTop: 10 }}>Not a member?</Text>
      <TouchableOpacity onPress={handleLogin} disabled={loading} style={styles.Button}>
        <Text style={{ color: 'black', textAlign: 'center', marginTop: 0 }}>create an acount</Text>
      </TouchableOpacity>
    </View>
  );
};

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
    marginTop: -150,

    width: 180,
    height: 180,
    resizeMode: 'contain',
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

export default LoginForm;

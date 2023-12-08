import { TouchableOpacity, View, Linking, TextInput, Button, Alert, StyleSheet, ActivityIndicator, Text, Image } from 'react-native';



export default function Login(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={() => props.navigation.navigate("Home")} >
                <Text style={{ color: 'black', textAlign: 'center', marginTop: 0 }}>Home</Text>
            </TouchableOpacity>

        </View>
    );
}
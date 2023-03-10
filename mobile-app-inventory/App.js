import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';

// import Users from './Users';

export default function App() {
    return (
        <View style={styles.container}>
            <Login />
            {/* <StatusBar style="auto" /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});

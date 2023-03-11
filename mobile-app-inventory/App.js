import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/screens/HomeScreen';
import Login from './src/screens/Login';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from './src/screens/Dashboard';

// import Users from './Users';

export default function App() {
    const Stack = createStackNavigator();
    const BottomTabs = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <SafeAreaView style={styles.container}> */}
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Dashboard" component={Dashboard} />
                {/* <Login />
                    <Dashboard /> */}
                {/* </SafeAreaView> */}
            </Stack.Navigator>
        </NavigationContainer>
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

//import liraries
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Dashboard = () => {
    const BottomTabs = createBottomTabNavigator();
    return (
        <BottomTabs.Navigator>
            <BottomTabs.Screen name="Products" component={Products} />
            <BottomTabs.Screen name="Staff" component={Staff} />
            <BottomTabs.Screen name="Reports" component={Reports} />
            <BottomTabs.Screen name="Search" component={Search} />
        </BottomTabs.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {},
});

export default Dashboard;

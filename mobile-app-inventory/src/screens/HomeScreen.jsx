//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import { TouchableOpacity } from 'react-native-web';

// create a component

const HomeScreen = () => {
    return (
        <View>
            <View style={styles.homeContainer}>
                <View style={styles.box}>
                    <Icons.RocketLaunchIcon
                        color="#e11d48"
                        fill="#fff"
                        size={42}
                    />
                    <Text style={styles.logoTextStyle}>Ultimate</Text>
                    <Text style={styles.logoTextStyle}>Inventory</Text>
                    <Text style={styles.logoTextStyle}>Application</Text>
                </View>
            </View>
            <View style={styles.homeContainer}>
                <Text style={styles.textStyle}>Gelos ISS</Text>
                <Text style={styles.textStyle}>Ultimate Inventory System</Text>
            </View>
            <View style={styles.homeContainer}>
                <View>
                    <TextInput
                        placeholder="Username or Email"
                        placeholderTextColor="#9ca3af"
                        style={styles.inputStyle}
                    />
                    <TextInput
                        placeholder="Password"
                        placeholderTextColor="#9ca3af"
                        style={styles.inputStyle}
                    />
                    <View style={styles.paddingTop}>
                        <TouchableOpacity style={styles.mainBtnBorder}>
                            <Text style={styles.mainBtnText}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    homeContainer: {
        paddingTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 250,
        height: 150,
        backgroundColor: '#4338ca',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoTextStyle: {
        color: '#eef2ff',
        // fontWeight: 'bold',
        fontSize: 18,
        lineHeight: 20,
    },
    textStyle: {
        color: '13262F',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    mainBtnBorder: {
        flexDirection: 'row',
        backgroundColor: '#4338ca',
        padding: 8,
        borderRadius: 5,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },

    mainBtnText: {
        color: '#fdfdff', // white
        fontSize: 14,
        // fontWeight: 'bold',
        letterSpacing: 2,
    },
    inputStyle: {
        height: 40,
        margin: 8,
        borderWidth: 0.5,
        borderRadius: 5,
        padding: 10,
    },
    paddingTop: {
        paddingTop: 10,
    },
});
export default HomeScreen;

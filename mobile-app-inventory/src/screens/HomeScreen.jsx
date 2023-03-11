//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import * as Icons from 'react-native-heroicons/solid';
import { TouchableOpacity } from 'react-native-web';

const HomeScreen = ({ navigation }) => {
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
            <View style={styles.introContainer}>
                <View style={styles.introWrapper}>
                    <Text style={styles.textStyle}>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Nostrum, alias? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Vero, est. Lorem ipsum
                        dolor, sit amet consectetur adipisicing elit.
                        Voluptatum, nemo?
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Login');
                    }}
                    style={styles.signInBtn}
                >
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
            {/* <View style={styles.homeContainer}>
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
            </View> */}
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    signInBtn: {
        alignItems: 'center',
    },
    btnText: {
        width: 150,
        borderRadius: 30,
        backgroundColor: '#4338ca',
        paddingTop: 20,
        paddingBottom: 20,
        color: 'white',
        fontWeight: 'bolder',
        textAlign: 'center',
    },
    homeContainer: {
        flex: 2,
        paddingTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    introContainer: {
        flex: 3,
        paddingTop: 20,
        paddingBottom: 10,
        alignItems: 'center',
    },
    introWrapper: { paddingBottom: 50, width: 250, maxWidth: '100%' },
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
        fontSize: 16,
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

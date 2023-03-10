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

const Login = () => {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    style={styles.logo}
                    source={require('../images/logo.png')}
                />
                <View style={styles.textHeaderContainer}>
                    <Text style={styles.gelosIss}>GELOS ISS</Text>
                    <Text style={styles.textStyling}>
                        Inventory Software System
                    </Text>
                </View>
            </View>
            <View style={styles.formConntainer}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.inputStyling}
                        placeholder="Username or Email"
                        placeholderTextColor={'#a1a1aa'}
                    ></TextInput>
                    <TextInput
                        style={styles.inputStyling}
                        placeholder="Password"
                        placeholderTextColor={'#a1a1aa'}
                        secureTextEntry={true}
                    ></TextInput>
                    <TouchableOpacity style={styles.signinBtn}>
                        <Text style={styles.signinBtnText}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
    },
    logoContainer: {
        flex: 2,
        paddingTop: 130,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        borderRadius: 3,
    },
    textHeaderContainer: {
        paddingTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyling: {
        fontSize: 20,
        color: '#1f2937',
    },
    gelosIss: {
        fontSize: 24,
        color: '#dc2626',
        paddingBottom: 10,
        fontWeight: 'bold',
    },
    formConntainer: {
        flex: 3,
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 60,
        width: 350,
        maxWidth: '100%',
        justifyContent: 'center',
        alignContent: 'center',
    },
    inputStyling: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor: '#71717a',
        padding: 10,
        borderRadius: 3,
    },
    signinBtn: {
        height: 40,
        margin: 12,
        backgroundColor: '#dc2626',
        padding: 10,
        borderRadius: 3,
    },
    signinBtnText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
    },
});

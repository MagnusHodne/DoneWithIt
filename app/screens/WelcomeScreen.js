import React from "react";
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";

import colors from "../config/colors";

function WelcomeScreen(props) {
    return (
        <ImageBackground
            style={styles.background}
            source={require("../assets/background.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo-red.png")}/>
                <Text>Sell what you don't need</Text>
            </View>
            <View style={styles.loginButton}>
                <Text>Login</Text>
            </View>
            <View style={styles.registerButton}>
                <Text>Register</Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    loginButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
    },
    logo: {
        alignSelf: "center",
        width: 100,
        height: 100,
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 70,
    },
    registerButton: {
        width: "100%",
        height: 70,
        backgroundColor: colors.secondary,
        justifyContent: "center",
        alignItems: "center",
    },
});
export default WelcomeScreen;

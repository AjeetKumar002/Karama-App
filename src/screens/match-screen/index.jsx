import { View, Text, SafeAreaView, StyleSheet, ImageBackground } from 'react-native'
import React from 'react';
import Back from '../../../assets/images/match-backgrund.png';
import Bg from '../../../assets/images/matchBg.png';

export default function Help() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
        <ImageBackground source={Back} style={styles.imageBackground} >
        <ImageBackground source={Bg} style={styles.Background}>
        <View style={styles.back}>
            <Text style={styles.text}>Help</Text>
        </View>
        <View style={styles.center}>
            <Text style={styles.text}>Help</Text>
        </View>
        <View style={styles.footer}>
        <Text style={styles.text}>Help</Text>

        </View>
        </ImageBackground>
        </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    SafeAreaView: {
        width: "100%",
        flex: 1,
        backgroundColor: "rgba(247, 247, 247, 0.85)",
        justifyContent: 'center',
    alignItems: 'center',
    },
    Background: {
        width: "100%", // Set the width
        height:" 100%", // Set the height
        // position: 'absolute', // To apply position offsets
        // top: -17.13, // Offset from the top
        // left: 442.01, // Offset from the left
        // transform: [{ rotate: '-90deg' }], // Rotate the image
        opacity: 0.5,
    },
    imageBackground: {
        width: "100%", // Set the width
        height:" 100%", // Set the height
    }
})
import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Arrow from '../../../assets/images/TopBarArow.png';

export default function BackButonTopBar() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.arrow}>
      <Image source={Arrow} alt="back" style={styles.arrow} />
      </TouchableOpacity>
      <Text style={styles.text}>Edit Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center", // Center contents horizontally
        height: 52,
        marginTop: 20,
        paddingHorizontal: 16, // Add some horizontal padding
    },
    arrow: {
        width: 28,
        height: 28,
        position: "absolute",
        left: 16, // Position the arrow to the left
    },
    text: {
        fontSize: 20,
        fontWeight: "600",
        lineHeight: 30,
        color: "rgba(5, 34, 34, 1)",
    }
})

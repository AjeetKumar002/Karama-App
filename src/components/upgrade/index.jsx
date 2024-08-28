import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function UpgradeBar({handleUpgrae}) {

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={handleUpgrae}>
            <Text style={styles.text}>Upgrade</Text>
        </TouchableOpacity>
        <Text style={styles.para}>Upgrade to Karama + to get you profile seen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: 358,
        backgroundColor: "rgba(38, 29, 42, 0.05)",
        borderRadius: 20,
        flexDirection: "row",
        gap: 14,
        padding: 8,
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: "auto",
        // marginVertical: "auto",
        marginVertical: 8,
        opacity: 1,
    },
    button: {
        backgroundColor: "rgba(235, 68, 48, 1)",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 18
    },
    text: {
        fontSize: 14,
        lineHeight: 18.2,
        fontWeight: "500",
        color: "rgba(255, 255, 255, 1)"
    },
    para: {
        width: 231.66,
        fontSize: 14,
        fontWeight: "500",
        lineHeight: 18.2,
    }
})
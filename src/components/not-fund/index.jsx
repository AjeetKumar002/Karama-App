import { View, Text, SafeAreaView, StyleSheet, Image } from 'react-native'
import React from 'react';
import Appear from '../../../assets/images/apear-match.png';

export default function NoMatches() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Matches</Text>
      </View>
      <View style={styles.body}>
        <Image source={Appear} alt='appear'style={styles.img}/>
        <Text style={styles.appearText}>Your matches will appear here </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,  
        width: "100%"  
    },
    header: {
        width: 358,
        marginHorizontal: "auto",
        marginTop: 40
    },
    headerText: {
        fontSize: 32,
        lineHeight: 36.48,
        fontWeight: "500",
        color: "rgba(5, 34, 34, 1)"
    },
    body: {
        flex: 1,
        width: 358,
        marginHorizontal: "auto",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        width: 243.94,
        height: 320,
    },
    appearText: {
        width: 217,
        color: "rgba(38, 29, 42, 0.9)",
        fontSize: 24,
        lineHeight: 36,
        fontWeight: "600",
        textAlign: "center",
        marginTop: 20
    }
})
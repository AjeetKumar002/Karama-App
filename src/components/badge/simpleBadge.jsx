import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SimpleBadgeComponent(props) {
    return (
      <View style={styles.container}>
        <Image source={props.BadgeIcon} alt="image" style={{width:16, height:16}} />
      <Text style={styles.tagText}>{props.BadgeText}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        // width: 97,
        height: 38,
        paddingTop: 8,
        paddingRight: 16,
        paddingBottom: 8,
        paddingLeft: 8,
        borderRadius: 28,
        gap: 8,
        backgroundColor: "rgba(38, 29, 42, 0.05)",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    tagText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 22.4,
        color: "rgba(5, 34, 34, 1)"
    },
    
})
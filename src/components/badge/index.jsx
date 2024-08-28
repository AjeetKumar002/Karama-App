import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Girl from '../../../assets/images/girl006.png';
import { Badge } from 'react-native-paper';

export default function BadgeComponent(props) {
    return (
        <View style={styles.main}>
        <Badge style={styles.badge}>{props.number}</Badge>
      <View style={styles.container}>
        <Image source={props.BadgeIcon} alt="image" style={{width:16, height:16}} />
      <Text style={styles.tagText}>{props.BadgeText}</Text>
    </View>
    </View>
  )
}

const styles = StyleSheet.create({
    main: {
        width: 118,
        height: 46
    },
    container: {
        width: 97,
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
    badge: {
        width: 24.1,
        height: 24.1,
        position: 'absolute',
        right: 12,
        top: -8,
        backgroundColor: "rgba(255, 255, 255, 1)",
        fontSize: 16,
        lineHeight: 17.9,
        fontWeight: "500",
        color: "rgba(0, 0, 0, 1)",
        zIndex: 1
    }
})
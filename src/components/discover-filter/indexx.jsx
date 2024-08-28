import { View, Text, SafeAreaView, ScrollView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function DiscoverFilter() {
  return (
    <SafeAreaView style={styles}>
        <ScrollView>
        <View style={styles.back}>
            <Image source={require("../../../assets/images/back.png")} alt='back' style={{width:14.6, height: 17.5}} />
                <Text style={styles.Nameing}>Williams</Text>
            {/* <Image source={require("../../../assets/images/threeDots.png")} alt='dots' style={{width:1.5, height: 13.5}} /> */}
            <TouchableOpacity style={styles.Done}>
                <Text style={styles.DoneText}>Done</Text>
            </TouchableOpacity>
        </View> 
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    back:{
        width: 358,
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 20,
        margin: "auto",
        // backgroundColor: "red"
      },
      head: {
        width: 115,
        flexDirection: "row",
        justifyContent: "space-between",
      },
      Nameing:{
        fontSize: 16,
        fontWeight: "600",
        lineHeight: 22.4,
      },
      Done:{
        paddingVertical: 8,
        paddingHorizontal: 16,
        backgroundColor: "rgba(235, 68, 48, 1)",
        borderRadius: 18,
      },
      DoneText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 22.4,
        color: "rgba(255, 255, 255, 1)"
      }
})
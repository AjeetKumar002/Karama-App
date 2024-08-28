import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import NoMatches from '../../../components/not-fund'
import Chat from '../../../components/chat'

export default function Matches() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <NoMatches />
      {/* <Chat /> */}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  SafeAreaView: { 
    width: "100%",
    flex: 1
  }
})
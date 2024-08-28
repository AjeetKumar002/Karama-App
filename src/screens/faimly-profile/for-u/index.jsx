import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import CarouselComponent from '../../../components/foru-carusel/index';
import LikeYouTopBar from '../../../components/liked-top-bar';
import img1 from '../../../../assets/images/Variant8.png';
import img2 from '../../../../assets/images/Variant3.png';
import img3 from '../../../../assets/images/Variant4.png';

export default function ForYou() {
  const sliderData = [{image: img1}, {image: img2}, {image: img3}];
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar />
      <LikeYouTopBar title="For You" start="Stars(2)" />
      <Text style={styles.para}>
        Here are our top recommendations for you based on your profile
      </Text>
      <View style={styles.carousel}>
      <CarouselComponent data={sliderData} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  para: {
    width: 310,
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: 'rgba(38, 29, 42, 0.7)',
    marginLeft: 28,
    marginTop: 15,
  },
  carousel: {
    width: "100%",
    marginHorizontal: "auto",
  }
});

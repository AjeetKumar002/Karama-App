import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
// import Left from '../../../assets/images/';
// import Star from '../../../assets/images/star-stuck.png';
export default function TextCenter() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Image
          source={require('../../../assets/images/topImage.png')}
          alt="leftimg"
          style={styles.leftImg}
        />
      </View>
      <View style={styles.center}>
        <Text style={styles.textCenter}>
          We’re almost done. Now tell us about your dream caregiver
          <Image
          source={require('../../../assets/images/star-struck.png')}
          alt="star"
        />
        </Text>
      </View>
      <View style={styles.right}>
        <Image
          source={require('../../../assets/images/bottomImage.png')}
          alt="rightimg"
          style={styles.rightImg}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    // flex: 1,
    // height: "100%"
  },
  left: {
    flex: 1,
    width: "100%",
    alignItems: "flex-end",
    // backgroundColor: "red"
  },
  leftImg: {
    width: 142.291,
    height: 192.788,
    // position: 'absolute',
    right: 0,
  },
  center: {
    flex: 2,
    width: "100%",
    // margin: 'auto',
    justifyContent: 'center',
    alignItems: 'center',
    position: "relative"
  },
  textCenter: {
    width: 342,
    color: '#052222',
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 44.8,
  },
  right: {
    flex: 1,
    width: "100%",

  },
  rightImg: {
    width: 142.291,
    height: 192.788,
    // position: 'absolute',
    left: 0,
    // top: 100,
  },
});

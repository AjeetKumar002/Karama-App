import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Image,
  Pressable,
} from 'react-native';
import React, {useState} from 'react';
import Star from '../../../assets/images/badge-star.png';

export default function LikeYouTopBar(props) {
  const [selected, setSelected] = useState(false);
  const HandleClick = () => {
    setSelected(prevSelected => !prevSelected);
}
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <StatusBar />
      <View style={styles.TopBar}>
        <Text style={styles.TopBarText}>{props.title}</Text>
        <Pressable onPress={HandleClick}>
          <View
            style={[
              styles.TopbarBadge,
              {backgroundColor: selected ? 'rgba(235, 68, 48, 1)' : 'rgba(38, 29, 42, 0.3)'}, // Change color based on state
            ]}>
            <Image source={Star} alt="star" style={{width: 16, height: 16}} />
            <Text style={styles.BadgeText}>{props.start}</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    width: '100%',
    // backgroundColor: "#F6F6F6",
    // backgroundColor: 'red',
    marginTop: 30,
    height: 36,
  },
  TopBar: {
    width: 358,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  TopBarText: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 36.48,
    color: '#052222',
  },
  TopbarBadge: {
    width: 104,
    height: 34,
    backgroundColor: '#EB4430',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    paddingLeft: 12,
    borderRadius: 18,
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  BadgeText: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18.2,
  },
});

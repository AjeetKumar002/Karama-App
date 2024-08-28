import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Touchable,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header2 from '../../../assets/images/discover-header-2.png';
import update from '../../../assets/images/upgrade1.png';
import GeneralContainer from './general';
import TabApp from '../tab-menu';

// import styles from 'rn-range-slider/styles'

export default function DiscoverPageProfile({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.Profile}>Profile</Text>
          <View style={styles.heandercontainer}>
            <View style={styles.imageContainer}>
              <Image
                source={Header2} // Replace with your image URL
                style={styles.image}
              />
              <View style={styles.overlay}>
                <Text style={styles.percentage}>90%</Text>
              </View>
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>Sako Reuben</Text>
              <Text style={styles.subtitle}>Family profile</Text>
            </View>
          </View>
          <View style={styles.Premium}>
            <Image
              source={update} // Replace with your image URL
              style={styles.PremiumImage}
            />
          </View>
         <GeneralContainer navigation={navigation} />
        </View>
      </ScrollView>
         <TabApp />
    </SafeAreaView>
  );
}



  

const styles = StyleSheet.create({
  container: {
    width: 358,
    marginHorizontal: 'auto',
    flex: 1,
    // marginTop: 30
  },
  heandercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#ffffff', // Background color of the card
    borderRadius: 8,
    gap: 20,
    width: 358,
    marginHorizontal: 'auto',
  },
  Profile: {
    fontSize: 32,
    lineHeight: 36.48,
    fontWeight: '500',
    color: 'rgba(5, 34, 34, 1)',
    marginTop: 40,
    marginBottom: 30,
  },
  imageContainer: {
    position: 'relative',
    width: 88,
    height: 88,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 73.75,
    height: 73.75,
    borderRadius: 40,
  },
  overlay: {
    position: 'absolute',
    bottom: -4,
    width: 65,
    height: 38,
    backgroundColor: '#ff5252',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    // paddingHorizontal: 16,
    // paddingVertical: 8,
    borderWidth: 3,
    borderColor: 'rgba(255, 253, 247, 1)',
  },
  percentage: {
    color: 'rgba(255, 255, 255, 1)',
    fontWeight: '400',
    fontSize: 16,
    lineHeight: 22.4,
  },
  textContainer: {
    gap: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    color: 'rgba(5, 34, 34, 1)',
    lineHeight: 36,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    color: 'rgba(5, 34, 34, 1)',
    lineHeight: 22.4,
  },
  Premium: {
    width: 358,
    marginHorizontal: 'auto',
    marginTop: 20,
  },
  PremiumImage: {
    width: 358,
    height: 82,
  },
  
});


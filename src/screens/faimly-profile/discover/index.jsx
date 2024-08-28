import {
  View,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Animated,
  PanResponder,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SelectedKarama from '../../../../assets/images/people-D.png';
import Header1 from '../../../../assets/images/discover-header-1.png';
import Header2 from '../../../../assets/images/discover-header-2.png';
import Header3 from '../../../../assets/images/discover-header-3.png';
import close from '../../../../assets/images/crossX.png';
import star from '../../../../assets/images/super-star.png';
import Heart from '../../../../assets/images/Union.png';
import DiscoverProfileView from '../../../components/discover-profile';

export default function Discover({navigation}) {
  const [changeScreen, setChangeScreen] = useState(false);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: pan.x,
            dy: pan.y,
          },
        ],
        {useNativeDriver: false},
      ),
      onPanResponderRelease: (e, gestureState) => {
        if (gestureState.dx > 120) {
          // Right swipe
          alert('Profile Liked');
          resetPosition();
        } else if (gestureState.dx < -120) {
          // Left swipe
          alert('Profile Disliked');
          resetPosition();
        } else {
          // Reset position if swipe is not strong enough
          resetPosition();
        }
      },
    }),
  ).current;

  const resetPosition = () => {
    Animated.spring(pan, {
      toValue: {x: 0, y: 0},
      useNativeDriver: false,
    }).start();
  };

  const handleChangeScreen = () => {
    setChangeScreen(true);
  };

  const handleCloseScreen = () => {
    setChangeScreen(false);
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      {changeScreen ? (
        <DiscoverProfileView />
      ) : (
        <ScrollView>
          <View style={styles.header}>
            <Image
              source={Header3}
              alt="img"
              style={{width: 35.57, height: 42.8, resizeMode: 'contain'}}
            />
            <View style={styles.twoBox}>
              <TouchableOpacity
                onPress={() => navigation.navigate('DiscoverFilter')}>
                <View style={styles.round}>
                  <Image
                    source={Header1}
                    alt="img"
                    style={{width: 19, height: 19, resizeMode: 'contain'}}
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => navigation.navigate('DiscoverPageProfile')}>
              <Image
                source={Header2}
                alt="img"
                style={{width: 40, height: 40, resizeMode: 'contain'}}
              />
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              styles.slider,
              {
                transform: [{translateX: pan.x}, {translateY: pan.y}],
              },
            ]}
            {...panResponder.panHandlers}>
            <TouchableOpacity onPress={handleChangeScreen}>
              <ImageBackground
                source={SelectedKarama}
                alt="people"
                style={styles.sliderImage}>
                <View style={styles.buttos}>
                  <TouchableOpacity
                    onPress={handleCloseScreen}
                    style={styles.close}>
                    <Image
                      source={close}
                      alt="close"
                      style={{width: 16.72, height: 16.72}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.star}>
                    <Image
                      source={star}
                      alt="close"
                      style={{width: 35.28, height: 35.28}}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.heart}>
                    <Image
                      source={Heart}
                      alt="close"
                      style={{width: 35.28, height: 35.28}}
                    />
                  </TouchableOpacity>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </Animated.View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    width: '100%',
  },
  header: {
    width: 358,
    flexDirection: 'row',
    margin: 'auto',
    justifyContent: 'space-between',
    marginBottom: 30,
    marginTop: 30,
  },
  twoBox: {
    flexDirection: 'row',
    width: 96,
    gap: 16,
  },
  round: {
    width: 40,
    height: 40,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
  },
  slider: {
    width: 358,
    height: 628,
    margin: 'auto',
    justifyContent: 'flex-end',
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  buttos: {
    width: 348,
    marginHorizontal: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  close: {
    width: 60,
    height: 59.35,
    borderRadius: 100,
    backgroundColor: 'rgba(33, 35, 41, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: 60,
    height: 59.35,
    borderRadius: 100,
    backgroundColor: 'rgba(37, 36, 36, 0.49)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heart: {
    width: 60,
    height: 59.35,
    borderRadius: 100,
    backgroundColor: 'rgba(255, 24, 24, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// import { View, Text, Image, SafeAreaView, StyleSheet, ImageBackground, ScrollView, TouchableOpacity } from 'react-native'
// import React, { useState } from 'react'
// import SelectedKarama from '../../../../assets/images/people-D.png';
// import Header1 from '../../../../assets/images/discover-header-1.png';
// import Header2 from '../../../../assets/images/discover-header-2.png';
// import Header3 from '../../../../assets/images/discover-header-3.png';
// // import styles from 'rn-range-slider/styles';
// import close from '../../../../assets/images/crossX.png';
// import star from '../../../../assets/images/super-star.png';
// import Heart from '../../../../assets/images/Union.png';
// import DiscoverProfileView from '../../../components/discover-profile';

// export default function Discover({navigation}) {
//   const [changeScreen, setChangeScreen] = useState(false);
//   const handleChangeScreen = () => {
//      setChangeScreen(true);
//    };

//    const handleCloseScreen = () => {
//      setChangeScreen(false);
//    };

//   return (
//     <SafeAreaView style={styles.SafeAreaView}>
//       {changeScreen ? (
//         <DiscoverProfileView/>
//       ) : (
//       <ScrollView>
//       <View style={styles.header}>
//         <Image source={Header3} alt="img" style={{width: 35.57, height: 42.8, resizeMode: "contain"}} />
//         <View style={styles.twoBox}>
//           <TouchableOpacity onPress={()=> navigation.navigate('DiscoverFilter')}>
//           <View style={styles.round}>
//         <Image source={Header1} alt="img" style={{width: 19, height: 19, resizeMode: "contain"}} />
//           </View>
//           </TouchableOpacity>
//         <Image source={Header2} alt="img" style={{width: 40, height: 40, resizeMode: "contain"}} />
//         </View>
//       </View>
//       <TouchableOpacity onPress={handleChangeScreen}>
//         <ImageBackground source={SelectedKarama} alt='people' style={styles.slider}>
//         <View style={styles.buttos}>
//             <TouchableOpacity onPress={handleCloseScreen} style={styles.close}>
//               <Image
//                 source={close}
//                 alt="close"
//                 style={{width: 16.72, height: 16.72}}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.star}>
//               <Image
//                 source={star}
//                 alt="close"
//                 style={{width: 35.28, height: 35.28}}
//               />
//             </TouchableOpacity>
//             <TouchableOpacity style={styles.heart}>
//               <Image
//                 source={Heart}
//                 alt="close"
//                 style={{width: 35.28, height: 35.28}}
//               />
//             </TouchableOpacity>
//           </View>
//         </ImageBackground>
//       </TouchableOpacity>
//       </ScrollView>
//       )
//     }
//     </SafeAreaView>
//   )
// }

// const styles = StyleSheet.create({
//   SafeAreaView:{
//     flex:1,
//     width: "100%"
//   },
//   header:{
//     width: 358,
//     flexDirection: "row",
//     margin: "auto",
//     justifyContent: "space-between",
//     marginBottom: 30,
//     marginTop: 30
//   },
//   twoBox: {
//     flexDirection: "row",
//     width: 96,
//     gap: 16
//   },
//   round:{
//     width: 40,
//     height: 40,
//     borderRadius: 100,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "rgba(38, 29, 42, 0.05)"
//   },
//   slider: {
//     width: 358,
//     height: 628,
//     margin: "auto",
//     justifyContent: "flex-end"
//   },
//   buttos: {
//     width: 348,
//     marginHorizontal: "auto",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     // marginTop: 50
//     marginBottom: 20
//   },
//   close: {
//     width: 60,
//     height: 59.35,
//     borderRadius: 100,
//     backgroundColor: 'rgba(33, 35, 41, 1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   star:{
//     width: 60,
//     height: 59.35,
//     borderRadius: 100,
//     backgroundColor: 'rgba(37, 36, 36, 0.49)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heart: {
//     width: 60,
//     height: 59.35,
//     borderRadius: 100,
//     backgroundColor: 'rgba(255, 24, 24, 1)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   }
// })

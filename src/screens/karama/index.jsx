import apple from '../../../assets/images/Apple.png';
import google from '../../../assets/images/Google.png';
import txt from '../../../assets/images/cont.png';
import facebook from '../../../assets/images/facebook.png';
import Background from '../../../assets/images/image_26.png';
import karama from '../../../assets/images/karama.png';
import phone from '../../../assets/images/phone.png';
import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const KaramaScreen = ({navigation}) => {
 
  return (
    <View style={styles.main}>
      <StatusBar style="light" />
      <ImageBackground source={Background} style={styles.background}>
        <View style={styles.contat}>
          <Image source={karama} style={styles.karama} />
        </View>
        <View style={styles.container}>
          <Image source={txt} style={styles.txt} />
        </View>
        <View style={styles.cent}>
          <Text style={styles.para}>
            By tapping ‘sign in’/‘Create account: you agree to our terms and
            services. Learn how we process your data in our privacy policy and
            cookies policy.
          </Text>
          <View style={styles.bottom}>
            <Pressable style={styles.link}>
              <Text style={styles.linktxt} onPress={()=> navigation.navigate('Phone')}>Sign in with</Text>
            </Pressable>
            <View style={styles.buttonsContainer}>
              <View style={styles.buttonShape}>
                <Pressable>
                  <Image source={google} />
                </Pressable>
              </View>
              <View style={styles.buttonShape}>
                <Pressable>
                  <Image source={apple} />
                </Pressable>
              </View>
              <View style={styles.buttonShape}>
                <Pressable >
                  <Image source={facebook} />
                </Pressable>
              </View>
              <View style={styles.buttonShape}>
                <Pressable>
                  <Image source={phone} />
                </Pressable>
              </View>
            </View>
            <Pressable style={styles.link} onPress={() => navigation.navigate('Home')}>
              <Text style={styles.linktxt}>Go back</Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#EB305D',
    flex: 1,
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '40%',
    marginVertical: 30,
  },
  contat: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  karama: {
    width: 154,
    height: 31,
  },
  txt: {
    width: width * 0.9,
    height: width * 0.9,
    resizeMode: 'contain',
  },
  cent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // gap: 8,
    height: '30%',
    // marginTop: 30
  },
  para: {
    width: 301,
    height: 48,
    lineHeight: 15.6,
    textAlign: 'center',
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
  bottom: {
    width: 247,
    height: 128,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8,
  },
  link: {
    width: '100%',
    marginVertical: 15,
  },
  linktxt: {
    fontWeight: '600',
    fontSize: 16,
    color: '#FFFDF7',
    lineHeight: 22.4,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  buttonShape: {
    backgroundColor: '#FFFFFF1A',
    width: 52,
    height: 52,
    borderRadius: 28,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default KaramaScreen;

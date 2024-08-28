// import {AntDesign} from '@expo/vector-icons';
import OTPTextInput from 'react-native-otp-textinput';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
const { width, height } = Dimensions.get('window');

export default function OtpSendScreen({navigation}) {
  const [otp, setOtp] = useState('');
  const correctOtp = '123456';

  const handleTextChange = text => {
    setOtp(text);
    if (text === correctOtp) {
      navigation.navigate('Start');
    }
  };

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.main}>
      <TouchableOpacity style={styles.close} onPress={handleGoBack}>
        <Image
          source={require('../../../assets/images/Arrow-Left.png')}
          alt="close"
          style={styles.arrow}
        />
      </TouchableOpacity>
      <View style={styles.data}>
        <View style={styles.phonelabel}>
          <Text style={styles.phoneText}>Enter code sent to your phone number</Text>
        </View>
        <View style={styles.otpContainer}>
          <OTPTextInput
            ref={e => (otpInput = e)}
            handleTextChange={handleTextChange}
            inputCount={6}
            tintColor="#EB4430"
            secureTextEntry
            onBackspace={() => {
              if (otp.length > 0) {
                setOtp(otp.slice(0, -1));
              }
            }}
            style={styles.otpInput}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: width * 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  close: {
    width:  width * (358 / 375),
    marginTop: 30,
    paddingHorizontal: 8
  },
  arrow: {
    width: 20,
    height: 17,
  },
  data: {
    flex: 1,
    width: width * 1,
    alignItems: "center",
    marginTop: 40,
  },
  phonelabel: {
    width: width * (342 / 375),
    paddingHorizontal: 10,
  },
  phoneText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#052222',
  },
  otpContainer: {
    width: width * (270 / 375),
    marginTop: 35,
  },
  otpInput: {
    width: width * (35 / 375),
    fontSize: 20,
    color: '#000',
    borderBottomWidth: 2,
    borderColor: '#EB4430', 
    paddingHorizontal: 10, 
  },
});

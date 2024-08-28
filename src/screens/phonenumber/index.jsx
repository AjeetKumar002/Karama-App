// import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default function PhoneNumber({navigation}) {
  const [isChecked, setIsChecked] = useState(false);

  const HandleGoBack = () => {
    navigation.goBack();
  };

  const toggleChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleNextPage = () => {
    if (isChecked) {
      navigation.navigate('OTP');
    } else {
      alert('Please check the checkbox first!');
    }
  };

  return (
    <>
      <SafeAreaView style={styles.main}>
        <StatusBar style="dark" />
        <ScrollView style={{paddingBottom: 20}}>
          <TouchableOpacity style={styles.close} onPress={HandleGoBack}>
            <Image
              source={require('../../../assets/images/cross.png')}
              alt="close"
              style={styles.arrow}
            />
          </TouchableOpacity>
          <View style={styles.data}>
            <View style={styles.phonelabel}>
              <Text style={styles.phoneText}>What's your phone number?</Text>
            </View>
            <View>
              <TextInput
                placeholder="Phone Number"
                placeholderTextColor="#261D2A4D"
                keyboardType="phone-pad"
                style={styles.input}
                selectionColor="#EB4430"
              />
            </View>
          </View>
        </ScrollView>
        <KeyboardAvoidingView
          style={styles.keyboardAvoidingView}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 35}>
          <View>
            <View style={styles.checkContainer}>
              <TouchableOpacity onPress={toggleChecked} style={styles.check}>
                {isChecked ? (
                  <Image
                    source={require('../../../assets/images/check.png')}
                    alt="check"
                    style={styles.check}
                  />
                ) : (
                  <Image
                    source={require('../../../assets/images/dry-clean.png')}
                    alt="un-check"
                    style={styles.check}
                  />
                )}
              </TouchableOpacity>
              <Text style={styles.checkText}>
                I would like to receive updates and news from Karama
              </Text>
            </View>
            <Pressable style={styles.nextbox} onPress={handleNextPage}>
              <Text style={styles.next}>Next</Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    width: width * 1,
    alignItems: 'center',
    flex: 1,
  },
  close: {
    width: width * (358 / 375),
    marginTop: 30,
    paddingHorizontal: 8,
  },
  arrow: {
    width: 17,
    height: 17,
  },
  input: {
    width: 342,
    fontSize: 32,
    letterSpacing: -2,
  },
  data: {
    width: width * (342 / 375),
    marginTop: 40,
    paddingHorizontal: 10,
  },
  phonelabel: {
    marginBottom: 15,
  },
  phoneText: {
    fontSize: 32,
    fontWeight: '500',
    color: '#052222',
  },
  keyboardAvoidingView: {
    flex: 1,
    width: width * 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 5,
  },
  checkContainer: {
    width: width * (342 / 375),
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    height: 36,
  },
  check: {
    width: 19.2,
    height: 19.2,
    resizeMode: 'contain',
  },
  checkText: {
    width: 301.84,
    fontSize: 14,
    fontWeight: '500',
  },
  nextbox: {
    width: width * (342 / 375),
    backgroundColor: '#261D2A1A',
    borderRadius: 28,
    paddingHorizontal: 147,
    paddingVertical: 15.5,
    marginVertical: 10,
  },
  next: {
    lineHeight: 22.4,
    fontSize: 16,
    color: '#261D2A4D',
    textAlign: 'center',
  },
});

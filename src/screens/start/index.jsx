import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ProgressBar} from 'react-native-paper';
import Home from '../../../assets/images/house.png';
import Heart from '../../../assets/images/heart.png';
import {Family, CareGiver} from '../../config/questions';
const {width, height} = Dimensions.get('window');

export default function Start({navigation}) {
  const [dependentQuestionList, setDependentQuestionList] = useState([]);
  const [parentQuestionList, setParentQuestionList] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const [initialRender, setInitialRender] = useState(false);

  useEffect(() => {
    if (initialRender) {
      if (selectedOption === 'Family') {
        const dependentQuestionFilter = Family?.filter(
          question => question?.dependsOn !== null,
        );
        setDependentQuestionList(dependentQuestionFilter);
        const parentQuestionFilter = Family?.filter(
          question => question?.dependsOn === null,
        );
        setParentQuestionList(parentQuestionFilter);
      } else {
        const dependentQuestionFilter = CareGiver?.filter(
          question => question?.dependsOn !== null,
        );
        setDependentQuestionList(dependentQuestionFilter);
        const parentQuestionFilter = CareGiver?.filter(
          question => question?.dependsOn === null,
        );
        setParentQuestionList(parentQuestionFilter);
      }
      setInitialRender(false);
    }
  }, [selectedOption]);

  const handleOptionPress = option => {
    setSelectedOption(option);
    setInitialRender(true);
    console.log('option: ', option);
  };

  const handleNextPress = () => {
    navigation.navigate('Questions', {
      questionAirType: selectedOption,
      dependentQuestionList: dependentQuestionList,
      parentQuestionList: parentQuestionList,
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollContainer}>
        <TouchableOpacity style={styles.close}>
          <Image
            source={require('../../../assets/images/Arrow-Left.png')}
            alt="close"
            style={styles.arrow}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={[styles.progress, {width: width * 0.68}]}>
            <ProgressBar progress={0.1} color={'#FF0000'} />
          </View>
        </View>
        <View style={styles.body}>
          <Text style={styles.questionText}>
            Hi there, let us begin. Are you a
          </Text>
        </View>
        <View style={styles.optionsContainer}>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'Family' ? styles.selectedOption : {},
            ]}
            onPress={() => handleOptionPress('Family')}>
              
        <Image source={Home} style={styles.optImg} alt='faimly' />
            <Text
              style={[
                styles.optionText,
                selectedOption === 'Family' ? styles.selectedOptionText : {},
              ]}>
              Family
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.optionButton,
              selectedOption === 'Caregiver' ? styles.selectedOption : {},
            ]}
            onPress={() => handleOptionPress('Caregiver')}>
              
        <Image source={Heart} style={styles.optImg} alt='CareGiver' />
            <Text
              style={[
                styles.optionText,
                selectedOption === 'Caregiver' ? styles.selectedOptionText : {},
              ]}>
              Caregiver
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.footer}>
          {/* {currentQuestionData.type !== 'inputText' && (
            <TouchableOpacity
              style={styles.skipButton}
              onPress={handleSkipPress}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          )} */}
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width * 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  scrollContainer: {
    height: height * 0.67,
  },

  // header
  header: {
    width: width * 0.9,
    alignItems: 'center',
    marginBottom: height * 0.01,
    // backgroundColor: "red"
  },
  close: {
    width: width * 0.9,
    height: height * 0.03,
    // backgroundColor: "purple"
  },
  arrow: {
    width: width * 0.05,
    height: height * 0.02,
  },
  progress: {
    width: width * 0.7,
    marginTop: height * 0.05,
  },

  // question
  body: {
    width: width * 0.83,
    margin: 'auto',
    marginVertical: height * 0.03,
  },
  questionText: {
    fontSize: width * 0.08,
    fontWeight: '500',
    color: '#052222',
  },

  // options
  optionsContainer: {
    width: width * 0.83,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: 16,
    marginTop: height * 0.01,
    margin: 'auto',
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#261D2A0D',
    borderRadius: 28,
    gap: width * 0.02,
  },
  optionText: {
    fontSize: width * 0.04,
    color: '#052222',
    fontWeight: '400',
  },
  optImg: {
    width: 18,
    height: 18
  },
  selectedOption: {
    backgroundColor: '#EB4430',
  },
  selectedOptionText: {
    color: 'white',
  },
  footer: {
    // position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginTop: height * 0.01,
    width: 342,
    justifyContent: 'flex-end',
    marginBottom: height * 0.02,
    margin: 'auto',
  },
  nextButton: {
    backgroundColor: '#EB4430',
    borderRadius: 24,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.02,
    // justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: width * 0.045,
    color: '#fff',
    textAlign: 'center',
  },
});

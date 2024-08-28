import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from 'react-native';
import {ProgressBar, Switch} from 'react-native-paper';
import {questions} from '../../config/questions1';
import MyListComponent from '../../components/list';

import DatePicker from 'react-native-date-picker';

const {width} = Dimensions.get('window');

const QuestionScreen = ({navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [isSwitchOn, setIsSwitchOn] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedTerm, setSelectedTerm] = useState('');
  const [termType, setTermType] = useState('');
  const [startDate, setStartDate] = useState(null); // Initialize as Date object
  const [endDate, setEndDate] = useState(null); // Initialize as Date object
  const [isOtherSelected, setIsOtherSelected] = useState(false);
  const [isStartDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [isEndDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const handleTermSelect = term => {
    setTermType(term);
    setStartDate(null); // Reset start date
    setEndDate(null); // Reset end date
  };
  const toggleSwitch = () => setIsSwitchOn(previousState => !previousState);

  const handleOptionPress = (option, sectionIndex = null, isSingle = false) => {
    const currentOptions = selectedOptions[currentQuestion] || {};
    if (sectionIndex !== null) {
      currentOptions[sectionIndex] = currentOptions[sectionIndex] || [];
      if (currentOptions[sectionIndex].includes(option)) {
        currentOptions[sectionIndex].splice(
          currentOptions[sectionIndex].indexOf(option),
          1,
        );
      } else {
        if (isSingle) {
          currentOptions[sectionIndex] = [option];
        } else {
          currentOptions[sectionIndex].push(option);
        }
      }
    } else {
      currentOptions.general = currentOptions.general || [];
      if (currentOptions.general.includes(option)) {
        currentOptions.general.splice(
          currentOptions.general.indexOf(option),
          1,
        );
      } else {
        if (isSingle) {
          currentOptions.general = [option];
        } else {
          currentOptions.general.push(option);
        }
      }
    }

    if (option.otherQ) {
      setCurrentQuestion(currentQuestion + 1); // Move to next question to show 'otherQ'
    }

    setSelectedOptions({
      ...selectedOptions,
      [currentQuestion]: currentOptions,
    });
    setSelectedTerm(option);
  };

  const handleNextPress = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setInputValue('');
    } else {
      console.log('You have reached the end of the questions!');
    }
  };
  const handleBackPress = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setInputValue('');
    } else {
      console.log('You have reached the start of the questions!');
      navigation.goBack();
    }
  };

  const renderOptions = (options, sectionIndex = null, isSingle = false) => {
    return (
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.optionButton,
              selectedOptions[currentQuestion]?.[sectionIndex ?? 'general'] &&
              selectedOptions[currentQuestion][
                sectionIndex ?? 'general'
              ].includes(option.text)
                ? styles.selectedOption
                : null,
            ]}
            onPress={() =>
              handleOptionPress(option.text, sectionIndex, isSingle)
            }>
            {option.tagImg && (
              <Image
                source={option.tagImg}
                alt="img"
                style={{width: 16, height: 16}}
              />
            )}
            <Text
              style={[
                styles.optionText,
                selectedOptions[currentQuestion]?.[sectionIndex ?? 'general'] &&
                selectedOptions[currentQuestion][
                  sectionIndex ?? 'general'
                ].includes(option.text)
                  ? styles.selectedOptionText
                  : null,
              ]}>
              {option.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  const renderQuestion = () => {
    const {
      text,
      options = [],
      input,
      switch: showSwitch,
      topImage,
      bottomImage,
      extraSections = [],
      additionaltext,
      showAdditionalButton,
      additionalButtonText,
      showSecondaryButton,
      secondaryButtonText,
      showThirdButton,
      thirdButtonText,
      showFourthButton,
      fourthButtonText,
      inputPlaceholder,
      isSingle = false,
    } = questions[currentQuestion];

    return (
      <SafeAreaView style={styles.container}>
        <StatusBar style="dark" />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.cont}>
              <TouchableOpacity style={styles.close} onPress={handleBackPress}>
                <Image
                  source={require('../../../assets/images/Arrow-Left.png')}
                  alt="close"
                  style={styles.arrow}
                />
              </TouchableOpacity>
              <View style={[styles.progress, {width: width * 0.7}]}>
                <ProgressBar
                  progress={(currentQuestion + 1) / questions.length}
                  color={'#FF0000'}
                />
              </View>
            </View>
            {topImage && bottomImage ? (
              <View style={styles.specialContainer}>
                <Image source={topImage} style={styles.topImage} />
                <Text style={styles.specialText}>
                  {text}
                  <Image
                    source={require('../../../assets/images/star-struck.png')}
                    alt="img"
                  />
                </Text>
                <Image source={bottomImage} style={styles.bottomImage} />
              </View>
            ) : (
              <Text style={styles.questionText}>{text}</Text>
            )}
            {additionaltext && (
              <Text style={styles.additionalText}>{additionaltext}</Text>
            )}
            <View style={styles.additionalContainer}>
              {showAdditionalButton && (
                <TouchableOpacity
                  style={[
                    styles.additionalButton,
                    selectedButton === 'additional' && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedButton('additional')}>
                  <Text
                    style={[
                      styles.additionalButtonText,
                      selectedButton === 'additional' &&
                        styles.selectedButtonText,
                    ]}>
                    {additionalButtonText}
                  </Text>
                </TouchableOpacity>
              )}

              {showSecondaryButton && (
                <TouchableOpacity
                  style={[
                    styles.secondaryButton,
                    selectedButton === 'secondary' && styles.selectedButton,
                  ]}
                  onPress={() => setSelectedButton('secondary')}>
                  <Text
                    style={[
                      styles.secondaryButtonText,
                      selectedButton === 'secondary' &&
                        styles.selectedButtonText,
                    ]}>
                    {secondaryButtonText}
                  </Text>
                </TouchableOpacity>
              )}
            </View>

            {input ? (
              <TextInput
                style={styles.input}
                value={inputValue}
                placeholderTextColor="#261D2A4D"
                onChangeText={setInputValue}
                placeholder={inputPlaceholder}
                selectionColor="#FF5733"
              />
            ) : (
              renderOptions(options, null, isSingle)
            )}

            {extraSections.map((section, sectionIndex) => (
              <View key={sectionIndex} style={styles.extraSection}>
                <Text style={styles.extraText}>{section.extraText}</Text>
                {renderOptions(section.options, sectionIndex, section.isSingle)}
              </View>
            ))}
            {showSwitch && (
              <View style={styles.switchContainer}>
                <Text style={styles.switchText}>Show on profile</Text>
                <Switch value={isSwitchOn} onValueChange={toggleSwitch} />
              </View>
            )}
            {selectedTerm === 'Short Term' && (
              <View style={styles.dateInputContainer}>
                <TouchableOpacity
                  onPress={() => setStartDatePickerVisible(true)}>
                  <TextInput
                    style={styles.datePicker}
                    placeholder="Select Start Date"
                    value={startDate ? startDate.toLocaleDateString() : ''}
                    editable={false}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setEndDatePickerVisible(true)}>
                  <TextInput
                    style={styles.datePicker}
                    placeholder="Select End Date"
                    value={endDate.toLocaleDateString()}
                    editable={false}
                  />
                </TouchableOpacity>
                <Modal
                  visible={isStartDatePickerVisible}
                  transparent={true}
                  animationType="slide"
                  onRequestClose={() => setStartDatePickerVisible(true)}>
                  <View style={styles.modalContainer}>
                    <View style={styles.datePickerModal}>
                      <DatePicker
                        date={startDate}
                        mode="date"
                        onDateChange={date => {
                          setStartDate(date);
                          setStartDatePickerVisible(false);
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => setStartDatePickerVisible(false)}>
                        <Text style={styles.modalButtonText}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
                <Modal
                  visible={isEndDatePickerVisible}
                  transparent={true}
                  animationType="slide"
                  onRequestClose={() => setEndDatePickerVisible(false)}>
                  <View style={styles.modalContainer}>
                    <View style={styles.datePickerModal}>
                      <DatePicker
                        date={endDate}
                        mode="date"
                        onDateChange={date => {
                          setEndDate(date);
                          setEndDatePickerVisible(false);
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => setEndDatePickerVisible(false)}>
                        <Text style={styles.modalButtonText}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            )}
            {selectedTerm === 'Long Term' && (
              <View style={styles.dateInputContainer}>
                <TouchableOpacity
                  onPress={() => setStartDatePickerVisible(true)}>
                  <TextInput
                    style={styles.datePicker}
                    placeholder="Select Start Date"
                    value={startDate.toLocaleDateString()}
                    editable={false}
                  />
                </TouchableOpacity>
                <Modal
                  visible={isStartDatePickerVisible}
                  transparent={true}
                  animationType="slide"
                  onRequestClose={() => setStartDatePickerVisible(false)}>
                  <View style={styles.modalContainer}>
                    <View style={styles.datePickerModal}>
                      <DatePicker
                        date={startDate}
                        mode="date"
                        onDateChange={date => {
                          setStartDate(date);
                          setStartDatePickerVisible(false);
                        }}
                      />
                      <TouchableOpacity
                        onPress={() => setStartDatePickerVisible(false)}>
                        <Text style={styles.modalButtonText}>Close</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                </Modal>
              </View>
            )}
          </ScrollView>

          <View style={styles.buttonContainer}>
            <View>
              {showThirdButton && (
                <TouchableOpacity style={styles.thirdButton}>
                  <Text style={styles.thirdButtonText}>{thirdButtonText}</Text>
                </TouchableOpacity>
              )}
            </View>
            <View>
              {showFourthButton && (
                <TouchableOpacity
                  style={styles.showFourthButton}
                  onPress={handleNextPress}>
                  <Text style={styles.fourthButtonText}>
                    {fourthButtonText}
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };

  return renderQuestion();
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  cont: {
    width: 358,
    alignItems: 'flex-start',
    marginBottom: 40,
    margin: 'auto',
  },
  close: {
    width: 28,
    heght: 20,
  },
  arrow: {
    width: 20,
    height: 17,
  },
  progress: {
    margin: 'auto',
    marginTop: 40,
  },
  questionText: {
    fontSize: 32,
    width: 342,
    fontWeight: '500',
    color: '#052222',
  },
  optionsContainer: {
    width: 342,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: 16,
    marginTop: 20,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#261D2A0D',
    borderRadius: 28,
    height: 38,
    gap: 8,
  },
  selectedOption: {
    backgroundColor: '#EB4430',
    color: 'black',
  },
  selectedOptionText: {
    color: 'white',
  },
  optionText: {
    fontSize: 16,
  },
  switchMain: {
    width: 342,
  },
  switchContainer: {
    width: 342,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 30,
  },
  switchText: {
    fontSize: 16,
  },
  nextButton: {
    backgroundColor: '#EB4430',
    padding: 15,
    borderRadius: 24,
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: 16,
    color: '#fff',
  },
  skipButton: {
    backgroundColor: '#FF5733',
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
  },
  skipButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
    width: 342,
    justifyContent: 'space-between',
    margin: 'auto',
    marginBottom: 15,
  },
  input: {
    width: 342,
    fontSize: 32,
    letterSpacing: -2,
    marginTop: 20,
  },
  extraSection: {
    width: 342,
  },
  extraText: {
    fontSize: 16,
    marginTop: 20,
    color: '#261D2A80',
  },
  specialContainer: {
    alignItems: 'center',
    marginVertical: 20,
    width: '100%',
  },
  topImage: {
    width: 142.29,
    height: 192.79,
    left: 120,
  },
  specialText: {
    width: 342,
    fontSize: 32,
    marginVertical: 20,
    lineHeight: 44,
    color: ' #052222',
  },
  bottomImage: {
    width: 151,
    height: 219,
    right: 120,
  },
  additionalText: {
    fontSize: 16,
    width: 342,
    color: '#261D2A80',
    marginTop: 20,
    marginBottom: 20,
  },
  additionalContainer: {
    width: 342,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 20,
  },
  additionalButton: {
    backgroundColor: '#261D2A0D',
    borderRadius: 24,
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: 'center',
  },
  selectedButton: {
    backgroundColor: '#EB4430',
  },

  additionalButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  selectedButtonText: {
    color: 'white',
  },
  secondaryButton: {
    backgroundColor: '#261D2A0D',
    borderRadius: 24,
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: 'center',
  },
  secondaryButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  thirdButton: {
    backgroundColor: '#261D2A0D',
    borderRadius: 24,
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: 'center',
  },
  thirdButtonText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
  },
  showFourthButton: {
    backgroundColor: '#EB4430',
    borderRadius: 24,
    marginTop: 20,
    paddingHorizontal: 24,
    paddingVertical: 13,
    justifyContent: 'center',
  },
  fourthButtonText: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
  },
  dateInputContainer: {
    width: 342,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    width: 138,
    backgroundColor: '#261D2A0D',
    height: 38,
    borderRadius: 18,
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
});

export default QuestionScreen;

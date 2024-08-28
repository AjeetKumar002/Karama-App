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
import {questions} from '../../config/questions';
import {Consumer} from 'react-native-paper/lib/typescript/core/settings';

const {width, height} = Dimensions.get('window');

const QuestionScreen = ({navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [istoggleSwitch, setistoggleSwitch] = useState(false);

  const toggleSwitch = () => setistoggleSwitch(previousState => !previousState);

  const {
    question,
    options,
    isMultiSelect,
    input,
    inputProperties,
    showSwitch,
    description,
  } = questions[currentQuestion];

  const handleNextPress = () => {
    if (currentQuestion < questions.length - 1) {
      if (
        options?.length > 0 &&
        options.find((option, index) => option.title === 'Other')
      ) {
        setCurrentQuestion(currentQuestion + 2);
      } else {
        setCurrentQuestion(currentQuestion + 1);
      }

      // setInputValue('');
    } else {
      console.log('You have reached the end of the questions!');
    }
  };
  const handleBackPress = () => {
    if (currentQuestion > 0) {
      questions[currentQuestion - 1]?.parentId
        ? setCurrentQuestion(currentQuestion - 2)
        : setCurrentQuestion(currentQuestion - 1);

      // setInputValue('');
    } else {
      console.log('You have reached the start of the questions!');
      navigation.goBack();
    }
  };
  const handleOptionPress = (option, optionIndex) => {
    console.log('option: ', option);
    let currentOptions = [...selectedOptions];
    console.log('currentOptions1: ', currentOptions);
    if (option.title === 'Other' || "Yes") {
      // setIsOther(true);
      setCurrentQuestion(currentQuestion + 1);
    }
    if (isMultiSelect) {
      console.log('isMulti');
      if (currentOptions.includes(option)) {
        currentOptions = currentOptions.filter(opt => opt !== option);
      } else {
        currentOptions.push(option);
      }
    } else {
      console.log('isMulti not');
      currentOptions = [option];
    }

    console.log('currentOptions: ', currentOptions);
    setSelectedOptions(currentOptions);
  };

  console.log('selectedOptions: ', selectedOptions);
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollContainer}>
        {/* Screen header */}
        <TouchableOpacity style={styles.close} onPress={handleBackPress}>
          <Image
            source={require('../../../assets/images/Arrow-Left.png')}
            alt="close"
            style={styles.arrow}
          />
        </TouchableOpacity>
        <View style={styles.header}>
          <View style={[styles.progress, {width: width * 0.7}]}>
            <ProgressBar
              progress={100}
              // progress={(currentQuestion + 1) / questions.length}
              color={'#FF0000'}
            />
          </View>
        </View>
        {renderQuestions(question)}
        {description && renderDescreption(description)}
        {options &&
          options.length > 0 &&
          renderQuestionOptions(
            options,
            handleOptionPress,
            selectedOptions,
            setSelectedOptions,
          )}
        {input &&
          renderQuestionInput(inputValue, setInputValue, inputProperties)}
        {showSwitch && renderSwitch(istoggleSwitch, toggleSwitch)}
        {/* Screen footer */}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.footer}>
          <View>
            <TouchableOpacity style={styles.skipButton}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.nextButton}
              onPress={handleNextPress}>
              <Text style={styles.nextButtonText}>Next</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const renderQuestions = question => {
  return <Text style={styles.questionText}>{question}</Text>;
};
const renderQuestionOptions = (
  options,
  handleOptionPress,
  selectedOptions,
  setSelectedOptions,
) => {
  return (
    <View style={styles.optionsContainer}>
      {options &&
        options.length > 0 &&
        options.map((option, optionIndex) => (
          <TouchableOpacity
            key={optionIndex}
            style={[
              styles.optionButton,
              selectedOptions.includes(option) ? styles.selectedOption : null,
            ]}
            // style={[
            //   styles.optionButton,
            // selectedOptions[currentQuestion]?.[sectionIndex ?? 'general'] &&
            // selectedOptions[currentQuestion][
            //   sectionIndex ?? 'general'
            // ].includes(option.text)
            //   ? styles.selectedOption
            //   : null,
            // ]}
            onPress={() => handleOptionPress(option, optionIndex)}>
            {option.icon && (
              <Image
                source={option.icon}
                alt="img"
                style={{width: 16, height: 16}}
              />
            )}
            <Text
              style={[
                styles.optionText,
                selectedOptions.includes(option)
                  ? styles.selectedOptionText
                  : null,
              ]}
              // style={[
              //   styles.optionText,
              //   selectedOptions[currentQuestion]?.[
              //     sectionIndex ?? 'general'
              //   ] &&
              //   selectedOptions[currentQuestion][
              //     sectionIndex ?? 'general'
              //   ].includes(option.text)
              //     ? styles.selectedOptionText
              //     : null,
              // ]}
            >
              {option.title}
            </Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};
const renderQuestionInput = (inputValue, setInputValue, inputProperties) => {
  return (
    <TextInput
      style={styles.input}
      value={inputValue}
      placeholderTextColor="#261D2A4D"
      onChangeText={setInputValue}
      {...inputProperties}
      selectionColor="#FF5733"
    />
  );
};
const renderSwitch = (istoggleSwitch, toggleSwitch) => {
  return (
    <View style={styles.switchContainer}>
      <Text style={styles.switchText}>Show on profile</Text>
      <Switch value={istoggleSwitch} onValueChange={toggleSwitch} />
    </View>
  );
};
const renderDescreption = description => {
  return <Text style={styles.additionalText}>{description}</Text>;
};

export default QuestionScreen;
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
    marginBottom: height * 0.05,
  },
  close: {
    width: width * 0.07,
    height: height * 0.03,
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
  questionText: {
    fontSize: width * 0.08,
    width: 342,
    fontWeight: '500',
    color: '#052222',
    paddingHorizontal: 12,
  },

  // options
  optionsContainer: {
    width: 342,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    gap: 16,
    marginTop: height * 0.04,
    paddingHorizontal: 12,
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
  selectedOption: {
    backgroundColor: '#EB4430',
  },
  selectedOptionText: {
    color: 'white',
  },
  optionText: {
    fontSize: width * 0.04,
    color: '#052222',
    fontWeight: '400',
  },

  // input
  input: {
    width: width * 0.9,
    fontSize: width * 0.08,
    letterSpacing: -2,
    marginTop: height * 0.02,
    paddingHorizontal: 16,
  },

  // footer
  footer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    marginTop: height * 0.01,
    width: 342,
    alignSelf: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.02,
  },
  skipButton: {
    backgroundColor: '#261D2A0D',
    borderRadius: 24,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.02,
    justifyContent: 'center',
  },
  skipButtonText: {
    fontSize: width * 0.045,
    color: 'black',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#EB4430',
    borderRadius: 24,
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.02,
    justifyContent: 'center',
  },
  nextButtonText: {
    fontSize: width * 0.045,
    color: '#fff',
    textAlign: 'center',
  },
  switchContainer: {
    width: 342,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    margin: 'auto',
    paddingHorizontal: 4,
    marginTop: 30,
  },
  switchText: {
    fontSize: 16,
  },
  additionalText: {
    fontSize: 16,
    width: 342,
    color: '#261D2A80',
    marginTop: 20,
    marginBottom: 20,
  },
});
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     width: width,
//     height: height,
//     justifyContent: 'center',
//     alignItems: 'center',
//     // marginTop: 30,
//     margin: 0
//   },
//   scrollContainer: {
//     alignItems: 'center',
//     paddingVertical: 20,
//   },

//   // header
//   header: {
//     width: width*0.9,
//     alignItems: 'flex-start',
//     marginBottom: 40,
//     margin: 'auto',
//   },
//   close: {
//     width: 28,
//     heght: 20,
//   },
//   arrow: {
//     width: 20,
//     height: 17,
//   },
//   progress: {
//     margin: 'auto',
//     marginTop: 40,
//   },
//   //--------header ends--------------
//   // question
//   questionText: {
//     fontSize: 32,
//     width: 342,
//     fontWeight: '500',
//     color: '#052222',
//   },

//   //options
//   optionsContainer: {
//     width: 342,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     alignItems: 'flex-start',
//     gap: 16,
//     marginTop: 20,
//   },
//   optionButton: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     paddingVertical: 8,
//     paddingHorizontal: 16,
//     alignItems: 'center',
//     backgroundColor: '#261D2A0D',
//     borderRadius: 28,
//     height: 38,
//     gap: 8,
//   },
//   selectedOption: {
//     backgroundColor: '#EB4430',
//     color: 'black',
//   },
//   selectedOptionText: {
//     color: 'white',
//   },
//   optionText: {
//     fontSize: 16,
//   },

//   //input
//   input: {
//     width: 342,
//     fontSize: 32,
//     letterSpacing: -2,
//     marginTop: 20,
//   },

//   // footer
//   footer: {
//     flexDirection: 'row',
//     marginTop: 10,
//     width: 342,
//     justifyContent: 'space-between',
//     margin: 'auto',
//     marginBottom: 15,
//   },
//   skipButton: {
//     backgroundColor: '#261D2A0D',
//     borderRadius: 24,
//     marginTop: 20,
//     paddingHorizontal: 24,
//     paddingVertical: 13,
//     justifyContent: 'center',
//   },
//   skipButtonText: {
//     fontSize: 18,
//     color: 'black',
//     textAlign: 'center',
//   },
//   nextButton: {
//     backgroundColor: '#EB4430',
//     borderRadius: 24,
//     marginTop: 20,
//     paddingHorizontal: 24,
//     paddingVertical: 13,
//     justifyContent: 'center',
//   },
//   nextButtonText: {
//     fontSize: 18,
//     color: '#fff',
//     textAlign: 'center',
//   },
// });

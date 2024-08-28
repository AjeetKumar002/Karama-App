import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {ProgressBar, Switch} from 'react-native-paper';
// import DateTimePicker from '@react-native-community/datetimepicker';
import Heart from '../../../assets/images/heart.png';
import Home from '../../../assets/images/house.png';
import {CareGiver, Family} from '../../config/questions';

const {width, height} = Dimensions.get('window');

// const QuestionScreen = ({navigation}) => {
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState({});
//   const [showDatePicker, setShowDatePicker] = useState(false);
//   const [datePickerProps, setDatePickerProps] = useState({});

//   const handleNextPress = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       console.log('You have reached the end of the questions!');
//     }
//   };

//   const handleBackPress = () => {
//     if (currentQuestion > 0) {
//       setCurrentQuestion(currentQuestion - 1);
//     } else {
//       console.log('You are at the beginning of the questions!');
//     }
//   };

//   const handleSkipPress = () => {
//     handleNextPress();
//   };

//   const handleOptionPress = (questionId, option) => {
//     setAnswers({
//       ...answers,
//       [questionId]: option,
//     });
//     // handleNextPress();
//   };

//   const handleInputChange = (questionId, value) => {
//     setAnswers({
//       ...answers,
//       [questionId]: value,
//     });
//   };

//   const handleDateChange = (event, selectedDate) => {
//     const {questionId, fieldIndex} = datePickerProps;
//     const date = selectedDate || answers[questionId]?.dates[fieldIndex];
//     setShowDatePicker(false);

//     const newDates = answers[questionId]?.dates || [];
//     newDates[fieldIndex] = date;

//     setAnswers({
//       ...answers,
//       [questionId]: {...answers[questionId], dates: newDates},
//     });
//   };

//   const renderQuestion = question => {
//     const {id, type, questionText, options, inputProperties, dateFields} =
//       question;

//     switch (type) {
//       case 'singleSelect':
//         return (
//           <View style={styles.optionsContainer}>
//             <Text style={styles.questionText}>{questionText}</Text>
//             {options.map(option => (
//               <TouchableOpacity
//                 key={option.id}
//                 style={[
//                   styles.optionButton,
//                   answers[id] === option.value ? styles.selectedOption : null,
//                 ]}
//                 onPress={() => handleOptionPress(id, option.value)}>
//                 <Text
//                   style={[
//                     styles.optionText,
//                     answers[id] === option.value
//                       ? styles.selectedOptionText
//                       : null,
//                   ]}>
//                   {option.label}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         );
//       case 'inputText':
//         return (
//           <View>
//             <Text style={styles.questionText}>{questionText}</Text>
//             <TextInput
//               style={styles.input}
//               placeholder={inputProperties.placeholder}
//               value={answers[id] || ''}
//               onChangeText={value => handleInputChange(id, value)}
//             />
//           </View>
//         );
//       case 'toggleButton':
//         return (
//           <View>
//             <Text style={styles.questionText}>{questionText}</Text>
//             {options.map(option => (
//               <TouchableOpacity
//                 key={option.id}
//                 style={[
//                   styles.optionButton,
//                   answers[id] === option.value ? styles.selectedOption : null,
//                 ]}
//                 onPress={() => handleOptionPress(id, option.value)}>
//                 <Text
//                   style={[
//                     styles.optionText,
//                     answers[id] === option.value
//                       ? styles.selectedOptionText
//                       : null,
//                   ]}>
//                   {option.label}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         );
//       case 'multiSelect':
//         return (
//           <View style={styles.optionsContainer}>
//             <Text style={styles.questionText}>{questionText}</Text>
//             {options.map(option => (
//               <TouchableOpacity
//                 key={option.id}
//                 style={[
//                   styles.optionButton,
//                   answers[id]?.includes(option.value)
//                     ? styles.selectedOption
//                     : null,
//                 ]}
//                 onPress={() => {
//                   const currentAnswers = answers[id] || [];
//                   if (currentAnswers.includes(option.value)) {
//                     handleInputChange(
//                       id,
//                       currentAnswers.filter(val => val !== option.value),
//                     );
//                   } else {
//                     handleInputChange(id, [...currentAnswers, option.value]);
//                   }
//                 }}>
//                 <Text
//                   style={[
//                     styles.optionText,
//                     answers[id]?.includes(option.value)
//                       ? styles.selectedOptionText
//                       : null,
//                   ]}>
//                   {option.label}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         );
//       case 'multiCategorySelect':
//         return (
//           <View style={styles.optionsContainer}>
//             <Text style={styles.questionText}>{questionText}</Text>
//             {question.categories.map(category => (
//               <View key={category.category}>
//                 <Text style={styles.categoryText}>{category.category}</Text>
//                 {category.options.map(option => (
//                   <TouchableOpacity
//                     key={option.id}
//                     style={[
//                       styles.optionButton,
//                       answers[id]?.includes(option.value)
//                         ? styles.selectedOption
//                         : null,
//                     ]}
//                     onPress={() => {
//                       const currentAnswers = answers[id] || [];
//                       if (currentAnswers.includes(option.value)) {
//                         handleInputChange(
//                           id,
//                           currentAnswers.filter(val => val !== option.value),
//                         );
//                       } else {
//                         handleInputChange(id, [
//                           ...currentAnswers,
//                           option.value,
//                         ]);
//                       }
//                     }}>
//                     <Text
//                       style={[
//                         styles.optionText,
//                         answers[id]?.includes(option.value)
//                           ? styles.selectedOptionText
//                           : null,
//                       ]}>
//                       {option.label}
//                     </Text>
//                   </TouchableOpacity>
//                 ))}
//               </View>
//             ))}
//             {dateFields &&
//               dateFields.map(
//                 (dateField, index) =>
//                   answers[id]?.includes(dateField.optionId) && (
//                     <View key={index}>
//                       {dateField.labels.map((label, fieldIndex) => (
//                         <TouchableOpacity
//                           key={fieldIndex}
//                           onPress={() => {
//                             setDatePickerProps({questionId: id, fieldIndex});
//                             setShowDatePicker(true);
//                           }}>
//                           <Text>{label}</Text>
//                           <Text>
//                             {answers[id]?.dates?.[
//                               fieldIndex
//                             ]?.toLocaleDateString()}
//                           </Text>
//                         </TouchableOpacity>
//                       ))}
//                     </View>
//                   ),
//               )}
//           </View>
//         );
//       case 'multiToggle':
//         return (
//           <View>
//             <Text style={styles.questionText}>{questionText}</Text>
//             {options.map(option => (
//               <View key={option.id} style={styles.switchContainer}>
//                 <Text style={styles.switchText}>{option.label}</Text>
//                 <Switch
//                   value={answers[id]?.includes(option.value)}
//                   onValueChange={() => {
//                     const currentAnswers = answers[id] || [];
//                     if (currentAnswers.includes(option.value)) {
//                       handleInputChange(
//                         id,
//                         currentAnswers.filter(val => val !== option.value),
//                       );
//                     } else {
//                       handleInputChange(id, [...currentAnswers, option.value]);
//                     }
//                   }}
//                 />
//               </View>
//             ))}
//           </View>
//         );
//       default:
//         return null;
//     }
//   };

//   const currentQuestionData = questions[currentQuestion];
//   const dependentQuestion = questions.find(q => {
//     if (q.dependsOn) {
//       const dependentAnswer = answers[q.dependsOn.questionId];
//       return dependentAnswer && dependentAnswer.includes(q.dependsOn.optionId);
//     }
//     return false;
//   });

//   const shouldRenderDependentQuestion = dependentQuestion
//     ? currentQuestionData.dependsOn?.questionId === dependentQuestion.id
//     : true;

//   return (
//     <SafeAreaView style={styles.container}>
//       <StatusBar style="dark" />
//       <ScrollView style={styles.scrollContainer}>
//         <TouchableOpacity style={styles.close} onPress={handleBackPress}>
//           <Image
//             source={require('../../../assets/images/Arrow-Left.png')}
//             alt="close"
//             style={styles.arrow}
//           />
//         </TouchableOpacity>
//         <View style={styles.header}>
//           <View style={[styles.progress, {width: width * 0.7}]}>
//             <ProgressBar
//               progress={(currentQuestion + 1) / questions.length}
//               color={'#FF0000'}
//             />
//           </View>
//         </View>
//         {shouldRenderDependentQuestion && renderQuestion(currentQuestionData)}
//       </ScrollView>
//       <KeyboardAvoidingView
//         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//         style={{flex: 1}}>
//         <View style={styles.footer}>
//           {currentQuestionData.type !== 'inputText' && (
//             <TouchableOpacity
//               style={styles.skipButton}
//               onPress={handleSkipPress}>
//               <Text style={styles.skipButtonText}>Skip</Text>
//             </TouchableOpacity>
//           )}
//           <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
//             <Text style={styles.nextButtonText}>Next</Text>
//           </TouchableOpacity>
//         </View>
//       </KeyboardAvoidingView>
//       {/* {showDatePicker && (
//         <DateTimePicker
//           value={new Date()}
//           mode="date"
//           display="default"
//           onChange={handleDateChange}
//         />
//       )} */}
//     </SafeAreaView>
//   );
// };
const QuestionScreen = ({navigation}) => {
  const navigationParams = navigation.getState();
  // console.log(
  //   'navigationParams.params: ',
  //   navigationParams.routes[navigationParams.index].params,
  // );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [datePickerProps, setDatePickerProps] = useState({});
  const [showDependentQuestion, setShowDependentQuestion] = useState(false);
  const [dependentQuestionList, setDependentQuestionList] = useState([]);
  const [parentQuestionList, setParentQuestionList] = useState([]);
  const [initialQuestionSelectedOption, setInitialQuestionSelectedOption] =
    useState('');

  const initialQuestion = {
    id: 1,
    type: 'singleSelect',
    questionText: 'Hi there, let us begin. Are you a',
    // description: 'ffgggg',
    options: [
      {id: 1, label: 'Family', value: 'family', icon: Home},
      {id: 2, label: 'Caregiver', value: 'family', icon: Heart},
    ],
    // dependentQuestionId: 'q6',
    // isRequired: true,
    // validationRules: {
    //   regex: null,
    //   minLength: null,
    //   maxLength: null,
    // },
    dependsOn: null,
  };
  // const [dependentQuestionList, setDependentQuestionList] = useState(
  //   navigationParams.routes[navigationParams.index].params
  //     .dependentQuestionList,
  // );
  // const [parentQuestionList, setParentQuestionList] = useState(
  //   navigationParams.routes[navigationParams.index].params.parentQuestionList,
  // );
  // const [questionAirType, setQuestionairType] = useState(
  //   navigationParams.routes[navigationParams.index].params.questionAirType,
  // );

  const [initialRender, setInitialRender] = useState(false);
  console.log('initialQuestionSelectedOption: ', initialQuestionSelectedOption);
  console.log('parentQuestionList: ', parentQuestionList);
  useEffect(() => {
    if (initialRender) {
      if (initialQuestionSelectedOption === 'Family') {
        const dependentQuestionFilter = Family?.filter(
          question => question?.dependsOn !== null,
        );
        setDependentQuestionList(dependentQuestionFilter);
        const parentQuestionFilter = Family?.filter(
          question => question?.dependsOn === null,
        );
        setParentQuestionList(parentQuestionFilter);
      } else if (initialQuestionSelectedOption === 'Caregiver') {
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
  }, [initialQuestionSelectedOption]);

  const handleNextPress = () => {
    if (currentQuestion < parentQuestionList?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowDependentQuestion(false);
      setInitialQuestionSelectedOption('');
    } else {
      console.log('You have reached the end of the questions!');
    }
  };

  const handleBackPress = () => {
    if (showDependentQuestion) {
      setShowDependentQuestion(false);
    } else if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      navigation.goBack();
    }
  };

  const handleSkipPress = () => {
    handleNextPress();
  };

  const handleOptionPress = (questionId, option, type) => {
    if (type === 'multiSelect') {
      // Ensure currentAnswers is initialized as an array
      const currentAnswers = answers[questionId] ? answers[questionId] : [];
      if (currentAnswers.find(val => val?.value === option?.value)) {
        // If already selected, deselect it
        const updatedAnswers = currentAnswers?.filter(
          val => val?.value !== option?.value,
        );
        setAnswers({
          ...answers,
          [questionId]: updatedAnswers,
        });
      } else {
        // If not selected, select it
        const updatedAnswers = [...currentAnswers, option];
        setAnswers({
          ...answers,
          [questionId]: updatedAnswers,
        });
      }
    } else {
      if (!initialQuestionSelectedOption) {
        setInitialQuestionSelectedOption(option.label);
        setInitialRender(true);
      } else {
        setAnswers({
          ...answers,
          [questionId]: option,
        });
      }
    }

    // Check if this option triggers a dependent question
    if (option?.dependentQuestionId) {
      setShowDependentQuestion(true);
    }
  };

  const handleInputChange = (questionId, value) => {
    setAnswers({
      ...answers,
      [questionId]: value,
    });
  };

  const handleDateChange = (event, selectedDate) => {
    const {questionId, fieldIndex} = datePickerProps;
    const date = selectedDate || answers[questionId]?.dates[fieldIndex];
    setShowDatePicker(false);

    const newDates = answers[questionId]?.dates || [];
    newDates[fieldIndex] = date;

    setAnswers({
      ...answers,
      [questionId]: {...answers[questionId], dates: newDates},
    });
  };

  const renderQuestion = question => {
    const {id, type, questionText, options, inputProperties, dateFields} =
      question;

    switch (type) {
      case 'singleSelect':
        return (
          <SingleSelect
            type={type}
            options={options}
            questionText={questionText}
            answers={answers}
            questionId={id}
            handleOptionPress={handleOptionPress}
            initialQuestionSelectedOption={initialQuestionSelectedOption}
          />
        );
      case 'inputText':
        return (
          <View>
            <Text style={styles.questionText}>{questionText}</Text>
            <TextInput
              style={styles.input}
              placeholder={inputProperties.placeholder}
              value={answers[id] || ''}
              onChangeText={value => handleInputChange(id, value)}
            />
          </View>
        );
      case 'toggleButton':
        return (
          <View>
            <Text style={styles.questionText}>{questionText}</Text>
            {options.map(option => (
              <TouchableOpacity
                key={option.id}
                style={[
                  styles.optionButton,
                  answers[id] === option.value ? styles.selectedOption : null,
                ]}
                onPress={() => handleOptionPress(id, option)}>
                <Text
                  style={[
                    styles.optionText,
                    answers[id] === option.value
                      ? styles.selectedOptionText
                      : null,
                  ]}>
                  {option.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        );
      case 'multiSelect':
        return (
          <MultiSelect
            type={type}
            options={options}
            questionText={questionText}
            answers={answers}
            questionId={id}
            handleOptionPress={handleOptionPress}
          />
        );
      case 'multiCategory':
        // return (
        //   <View style={styles.optionsContainer}>
        //     <Text style={styles.questionText}>{questionText}</Text>
        //     {question.categories.map(category => (
        //       <View key={category.category}>
        //         <Text style={styles.categoryText}>{category.category}</Text>
        //         {category.type === 'sigleSelect' && (
        //           <SingleSelect
        //             type={category.type}
        //             options={category.options}
        //             answers={answers}
        //             questionId={questionId}
        //             handleOptionPress={handleOptionPress}
        //             category={category.category}
        //           />
        //         )}
        //         {category.type === 'multiSelect' && (
        //           <MultiSelect
        //             type={category.type}
        //             options={category.options}
        //             answers={answers}
        //             questionId={id}
        //             handleOptionPress={handleOptionPress}
        //             category={category.category}
        //           />
        //         )}
        //       </View>
        //     ))}
        //     {dateFields &&
        //       dateFields.map(
        //         (dateField, index) =>
        //           answers[id]?.includes(dateField.optionId) && (
        //             <View key={index}>
        //               {dateField.labels.map((label, fieldIndex) => (
        //                 <TouchableOpacity
        //                   key={fieldIndex}
        //                   onPress={() => {
        //                     setDatePickerProps({questionId: id, fieldIndex});
        //                     setShowDatePicker(true);
        //                   }}>
        //                   <Text>{label}</Text>
        //                   <Text>
        //                     {answers[id]?.dates?.[
        //                       fieldIndex
        //                     ]?.toLocaleDateString()}
        //                   </Text>
        //                 </TouchableOpacity>
        //               ))}
        //             </View>
        //           ),
        //       )}
        //   </View>
        // );
        return (
          <MultiCategory
            question={question}
            questionId={id}
            questionText={questionText}
            answers={answers}
            handleOptionPress={handleOptionPress}
          />
        );
      case 'multiToggle':
        return (
          <View>
            <Text style={styles.questionText}>{questionText}</Text>
            {options.map(option => (
              <View key={option.id} style={styles.switchContainer}>
                <Text style={styles.switchText}>{option.label}</Text>
                <Switch
                  value={answers[id]?.includes(option.value)}
                  onValueChange={() => {
                    const currentAnswers = answers[id] || [];
                    if (currentAnswers.includes(option.value)) {
                      handleInputChange(
                        id,
                        currentAnswers.filter(val => val !== option.value),
                      );
                    } else {
                      handleInputChange(id, [...currentAnswers, option.value]);
                    }
                  }}
                />
              </View>
            ))}
          </View>
        );
      default:
        return null;
    }
  };

  let currentQuestionData =
    parentQuestionList[currentQuestion] || initialQuestion;

  let dependentQuestionId = Array.isArray(answers[currentQuestionData?.id])
    ? answers[currentQuestionData?.id].find(val => val?.dependentQuestionId)
        ?.dependentQuestionId
    : answers[currentQuestionData?.id]?.dependentQuestionId;

  let dependentQuestion = dependentQuestionId
    ? dependentQuestionList.find(q => q?.id === dependentQuestionId)
    : // ? questions.find(q => q?.id === dependentQuestionId)
      null;

  let shouldRenderDependentQuestion =
    dependentQuestion && Array.isArray(answers[currentQuestionData?.id])
      ? answers[currentQuestionData?.id].find(val => val?.value === 'other') &&
        showDependentQuestion
      : answers[currentQuestionData?.id]?.value === 'other' &&
        showDependentQuestion;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView style={styles.scrollContainer}>
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
              progress={
                parentQuestionList.length > 0 &&
                (currentQuestion + 1) / parentQuestionList.length
              }
              color={'#FF0000'}
            />
          </View>
        </View>
        {/* {renderQuestion(currentQuestionData)} */}
        {shouldRenderDependentQuestion
          ? renderQuestion(dependentQuestion)
          : renderQuestion(currentQuestionData)}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <View style={styles.footer}>
          {currentQuestionData.type !== 'inputText' && (
            <TouchableOpacity
              style={styles.skipButton}
              onPress={handleSkipPress}>
              <Text style={styles.skipButtonText}>Skip</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.nextButton} onPress={handleNextPress}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
      {/* {showDatePicker && (
        <DateTimePicker
          value={new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )} */}
    </SafeAreaView>
  );
};

const SingleSelect = ({
  type,
  options,
  questionText,
  answers,
  questionId,
  handleOptionPress,
  category,
  initialQuestionSelectedOption,
}) => {
  return (
    <View style={styles.optionsContainer}>
      {questionText && <Text style={styles.questionText}>{questionText}</Text>}
      {options.map(option => {
        return (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              answers[questionId]?.id === option.id ||
              initialQuestionSelectedOption === option.label
                ? styles.selectedOption
                : null,
            ]}
            onPress={() =>
              handleOptionPress(questionId, option, type, category)
            }>
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
                answers[questionId]?.id === option.id ||
                initialQuestionSelectedOption === option.label
                  ? styles.selectedOptionText
                  : null,
              ]}>
              {option.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const MultiSelect = ({
  type,
  options,
  questionText,
  answers,
  questionId,
  handleOptionPress,
  category,
}) => {
  return (
    <View style={styles.optionsContainer}>
      {questionText && <Text style={styles.questionText}>{questionText}</Text>}
      {options.map(option => (
        <TouchableOpacity
          key={option.id}
          style={[
            styles.optionButton,
            answers[questionId] &&
            answers[questionId].find(val => val.value === option.value)
              ? styles.selectedOption
              : null,
          ]}
          onPress={() => handleOptionPress(questionId, option, type, category)}>
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
              answers[questionId] &&
              answers[questionId].find(val => val.value === option.value)
                ? styles.selectedOptionText
                : null,
            ]}>
            {option.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const MultiCategory = ({
  question,
  questionId,
  questionText,
  answers,
  handleOptionPress,
}) => {
  return (
    <View style={styles.optionsContainer}>
      <Text style={styles.questionText}>{questionText}</Text>
      {question.categories.map(category => (
        <View key={category.category}>
          <Text style={styles.categoryText}>{category.category}</Text>
          {category.type === 'sigleSelect' && (
            <SingleSelect
              type={category.type}
              options={category.options}
              answers={answers}
              questionId={questionId}
              handleOptionPress={handleOptionPress}
              category={category.category}
            />
          )}
          {category.type === 'multiSelect' && (
            <MultiSelect
              type={category.type}
              options={category.options}
              answers={answers}
              questionId={questionId}
              handleOptionPress={handleOptionPress}
              category={category.category}
            />
          )}
        </View>
      ))}
      {/* {dateFields &&
        dateFields.map(
          (dateField, index) =>
            answers[id]?.includes(dateField.optionId) && (
              <View key={index}>
                {dateField.labels.map((label, fieldIndex) => (
                  <TouchableOpacity
                    key={fieldIndex}
                    onPress={() => {
                      setDatePickerProps({questionId: id, fieldIndex});
                      setShowDatePicker(true);
                    }}>
                    <Text>{label}</Text>
                    <Text>
                      {answers[id]?.dates?.[fieldIndex]?.toLocaleDateString()}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            ),
        )} */}
    </View>
  );
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
    marginBottom: height * 0.01,
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
    marginBottom: 10,
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

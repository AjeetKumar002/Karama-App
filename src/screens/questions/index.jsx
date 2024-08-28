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
  import DateTimePicker, {
    DateTimePickerAndroid,
  } from '@react-native-community/datetimepicker';
  import Counter from './list';
  import DateComponent from '../../components/time';
  import TextCenter from '../../components/text-center';

  const {width, height} = Dimensions.get('window');

  const QuestionScreen = ({navigation}) => {
    const navigationParams = navigation.getState();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});
    // const [showDatePicker, setShowDatePicker] = useState(false);
    const [datePickerProps, setDatePickerProps] = useState(null);
    const [showDependentQuestion, setShowDependentQuestion] = useState(false);

    const [dependentQuestionList, setDependentQuestionList] = useState(
      navigationParams.routes[navigationParams.index].params
        .dependentQuestionList,
    );
    const [parentQuestionList, setParentQuestionList] = useState(
      navigationParams.routes[navigationParams.index].params.parentQuestionList,
    );
    const [questionAirType, setQuestionairType] = useState(
      navigationParams.routes[navigationParams.index].params.questionAirType,
    );

    const handleNextPress = () => {
      if (currentQuestion < parentQuestionList?.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setShowDependentQuestion(false);
      } else {
        console.log('You have reached the end of the questions!');
      }
    };

    const handleBackPress = () => {
      if (showDependentQuestion) {
        console.log('in showDependentQuestion if');
        setShowDependentQuestion(false);
      } else if (currentQuestion > 0) {
        console.log('in else if');
        setCurrentQuestion(currentQuestion - 1);
      } else {
        console.log('in else');
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
        setAnswers({
          ...answers,
          [questionId]: option,
        });
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
      console.log('answers: ', answers);
      console.log('datePickerProps: ', datePickerProps);
      const {questionId, optionId} = datePickerProps;
      const date = selectedDate || answers[questionId]?.dates[optionId];
      console.log('date: ', date);
      // setShowDatePicker(false);

      const newDates = answers[questionId]?.dates || [];
      newDates[optionId] = date;

      console.log('newDates: ', newDates);
      setAnswers({
        ...answers,
        [questionId]: {...answers[questionId], dates: newDates},
      });
    };
    const onChange = (event, selectedDate) => {
      console.log('answers: ', answers);
      console.log('datePickerProps: ', datePickerProps);
      const {questionId, optionId} = datePickerProps;
      const date = selectedDate || answers[questionId]?.dates[optionId];
      console.log('date: ', date);
      // setShowDatePicker(false);

      const newDates = answers[questionId]?.dates || [];
      newDates[optionId] = date;

      console.log('newDates: ', newDates);
      setAnswers({
        ...answers,
        [questionId]: {...answers[questionId], dates: newDates},
      });
      setDatePickerProps(null);
    };
    const showMode = currentMode => {
      DateTimePickerAndroid.open({
        value: new Date(),
        onChange,
        mode: currentMode,
        is24Hour: true,
      });
    };

    useEffect(() => {
      if (datePickerProps) {
        showDatepicker();
      }
    }, [datePickerProps]);

    const showDatepicker = (questionId, option) => {
      showMode('date', questionId, option);
    };

    const showTimepicker = () => {
      showMode('time');
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
            />
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
        case 'inputText':
          return (
            <View style={styles.inputBox}>
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
        case 'multiCategory':
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
        case 'dateInput':
          return (
            <View style={styles.optionsContainer}>
              <Text style={styles.questionText}>{questionText}</Text>
              {options.map(option => {
                const optionId = option.id;
                console.log(option);
                return (
                  <TouchableOpacity
                    key={optionId}
                    style={styles.optionButton}
                    onPress={() => {
                      setDatePickerProps({
                        questionId: id,
                        optionId,
                      });
                    }}>
                    <Text style={styles.datePicker}>{option.label}</Text>
                    <Text style={styles.datePicker}>
                      {answers[id]?.dates?.[optionId]?.toLocaleDateString()}
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        case 'counter':
          return (
            <Counter
              type={type}
              options={options}
              questionText={questionText}
              answers={answers}
              setAnswers={setAnswers}
              questionId={id}
              handleOptionPress={handleOptionPress}
            />
          );
        case 'time':
          return (
            <DateComponent
              type={type}
              options={options}
              questionText={questionText}
              answers={answers}
              questionId={id}
            />
          );
        case 'textCenter':
          return <TextCenter />;
        default:
          return null;
      }
    };

    console.log('----answers----: ', answers);
    let currentQuestionData = parentQuestionList[currentQuestion];

    let dependentQuestionId = Array.isArray(answers[currentQuestionData?.id])
      ? answers[currentQuestionData?.id].find(val => val?.dependentQuestionId)
          ?.dependentQuestionId
      : answers[currentQuestionData?.id]?.dependentQuestionId;

    let dependentQuestion = dependentQuestionId
      ? dependentQuestionList.find(q => q?.id === dependentQuestionId)
      : // ? questions.find(q => q?.id === dependentQuestionId)
        null;

    let shouldRenderDependentQuestion =
      dependentQuestion &&
      showDependentQuestion &&
      Array.isArray(answers[currentQuestionData?.id])
        ? answers[currentQuestionData?.id].find(val => val?.value === 'other') ||
          (answers[currentQuestionData?.id].find(val => val?.value === 'yes') &&
            showDependentQuestion)
        : answers[currentQuestionData?.id]?.value === 'other' ||
          (answers[currentQuestionData?.id]?.value === 'yes' &&
            showDependentQuestion);
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
                progress={(currentQuestion + 1) / parentQuestionList.length}
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
            <View>
              {currentQuestionData.type !== 'inputText' && (
                <TouchableOpacity
                  style={styles.skipButton}
                  onPress={handleSkipPress}>
                  <Text style={styles.skipButtonText}>Skip</Text>
                </TouchableOpacity>
              )}
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
                answers[questionId]?.id === option.id
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
                  answers[questionId]?.id === option.id
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
          <View>
            <TouchableOpacity
              key={option.id}
              style={[
                styles.optionButton,
                answers[questionId] &&
                answers[questionId].find(val => val.value === option.value)
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
                  answers[questionId] &&
                  answers[questionId].find(val => val.value === option.value)
                    ? styles.selectedOptionText
                    : null,
                ]}>
                {option.label}
              </Text>
            </TouchableOpacity>
          </View>
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
      gap: 8,
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
    categoryText: {
      fontSize: 16,
      color: '#261D2A66',
      fontWeight: '400',
      marginTop: 8,
    },
    inputBox: {
      width: 342,
      marginTop: height * 0.04,
      margin: 'auto',
    },

    // input
    input: {
      width: width * 0.9,
      fontSize: width * 0.08,
      letterSpacing: -2,
      paddingVertical: 8,
    },

    // footer
    footer: {
      // position: 'absolute',
      bottom: 0,
      flexDirection: 'row',
      marginTop: height * 0.01,
      width: 342,
      justifyContent: 'space-between',
      marginBottom: height * 0.02,
      margin: 'auto',
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
      // justifyContent: 'center',
    },
    nextButtonText: {
      fontSize: width * 0.045,
      color: '#fff',
      textAlign: 'center',
    },
    // switchContainer: {
    //   width: 342,
    //   flexDirection: 'row',
    //   alignItems: 'center',
    //   gap: 8,
    //   margin: 'auto',
    //   paddingHorizontal: 4,
    //   marginTop: 30,
    // },
    // switchText: {
    //   fontSize: 16,
    // },
    // additionalText: {
    //   fontSize: 16,
    //   width: 342,
    //   color: '#261D2A80',
    //   marginTop: 20,
    //   marginBottom: 20,
    // },

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

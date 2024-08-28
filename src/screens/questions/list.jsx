import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import MinusImg from '../../../assets/images/minus-sm.png';
import PlusImg from '../../../assets/images/plus.png';

const {width, height} = Dimensions.get('window');

export default function Counter({
  type,
  options,
  questionText,
  answers,
  setAnswers, // to update the parent component's state
  questionId,
  handleOptionPress,
}) {
  const [counters, setCounters] = useState(options.map(() => 0));

  // Update the answers whenever counters change
  useEffect(() => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: counters,
    }));
  }, [counters, setAnswers, questionId]);

  const increment = index => {
    setCounters(prevCounters => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] + 1;
      return newCounters;
    });
  };

  const decrement = index => {
    setCounters(prevCounters => {
      const newCounters = [...prevCounters];
      newCounters[index] = newCounters[index] > 0 ? newCounters[index] - 1 : 0;
      return newCounters;
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        {questionText && (
          <Text style={styles.questionText}>{questionText}</Text>
        )}
      </View>
      {options.map((option, index) => {
        return (
          <View style={styles.optionContainer} key={index}>
            <View style={styles.content}>
              {option.icon && (
                <Image
                  source={option.icon}
                  style={styles.countImg}
                  alt="counter"
                />
              )}
              <Text style={styles.name}>{option.label}</Text>
            </View>
            <View style={styles.counter}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => decrement(index)}>
                <Image source={MinusImg} style={styles.btn} alt="minus" />
              </TouchableOpacity>
              <Text style={styles.number}>{counters[index]}</Text>
              <TouchableOpacity
                style={styles.button}
                onPress={() => increment(index)}>
                <Image source={PlusImg} style={styles.btn} alt="plus" />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 342,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 'auto',
  },
  headingContainer: {
    marginBottom: 10,
    marginTop: 25,
  },
  optionContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  questionText: {
    fontSize: width * 0.08,
    width: 342,
    fontWeight: '500',
    color: '#052222',
  },
  content: {
    flexDirection: 'row',
    gap: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#261D2A0D',
    borderRadius: 28,
  },
  countImg: {
    width: 18,
    height: 18,
  },
  counter: {
    flexDirection: 'row',
    gap: 20,
  },
  button: {
    width: 24,
    height: 24,
    backgroundColor: '#261D2A1A',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: 14,
    height: 14,
  },
  number: {
    fontSize: 16,
    fontWeight: '400',
  },
});
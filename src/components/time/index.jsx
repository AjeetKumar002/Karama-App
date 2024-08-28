import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
const {width, height} = Dimensions.get('window');
import DateTimePicker, {
    DateTimePickerAndroid,
  } from '@react-native-community/datetimepicker';

export default function DateComponent({ type,
    options,
    questionText, 
    answers,
    questionId,}) {
  return (
    <View style={styles.container}>
      <View>
        {questionText && (
          <Text style={styles.questionText}>{questionText}</Text>
        )}
      </View>
      <View style={styles.heading}>
              <Text style={styles.headingText}>Begin</Text>
              <Text style={styles.headingText}>End</Text>
            </View>
      {options.map((option, index) => {
         const optionId = option.id;
        return (
          <View style={styles.optionContainer} key={index}>
            <View style={styles.day}>
              <Text style={styles.dayText}>{option.label}</Text>
              <View style={styles.time}>
                <View style={styles.begin}>
                  <View style={styles.beginTime}>
                    <TouchableOpacity>
                    <Text style={styles.dayText}>
                    00:00
                    </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.end}>
                  <View style={styles.endTime}>
                    <Text style={styles.dayText}>00:00</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 'auto',
  },
  heading: {
    width: 342,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 44,
    paddingHorizontal: 35,
    // marginBottom: 15,
    marginTop: 25,
  },
  questionText: {
    fontSize: width * 0.08,
    width: 342,
    fontWeight: '500',
    color: '#052222',
  },
  headingText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: 'rgba(38, 29, 42, 0.50)',
  },
  day: {
    width: 342,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dayText: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 18,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: '#052222',
    // gap: 16
  },
  time: {
    flexDirection: 'row',
    gap: 16,
  },
  optionContainer: {
    flex: 1,
    width: '100%',
    marginTop: 16,
  },
});

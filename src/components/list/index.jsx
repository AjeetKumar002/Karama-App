import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native';

const MyListComponent = () => {
  const [data, setData] = useState([
    { id: 1, optionText: 'Option 1', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    { id: 2, optionText: 'Option 2', initialCount: 0 },
    // Add more items as needed
  ]);

  const incrementCount = (id) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id ? { ...item, initialCount: item.initialCount + 1 } : item
      )
    );
  };

  const decrementCount = (id) => {
    setData(prevData =>
      prevData.map(item =>
        item.id === id && item.initialCount > 0 ? { ...item, initialCount: item.initialCount - 1 } : item
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {data.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Text style={styles.optionText}>{item.optionText}</Text>

          <View style={styles.counterContainer}>
            <TouchableOpacity style={styles.button} onPress={() => decrementCount(item.id)}>
              <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.countText}>{item.initialCount}</Text>
            <TouchableOpacity style={styles.button} onPress={() => incrementCount(item.id)}>
              <Text style={styles.buttonText}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  optionText: {
    flex: 1,
    marginRight: 16,
    fontSize: 16,
  },
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#333',
  },
  countText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
});

export default MyListComponent;

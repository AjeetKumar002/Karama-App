import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

const CarouselComponent = ({ data }) => {
  const renderItem = (item, index) => (
    <View style={styles.cardContainer} key={index}>
      <Image source={item.image} style={styles.image} />
      {/* Uncomment below to show additional information */}
      {/* 
      <View style={styles.infoContainer}>
          <Text style={styles.tag}>{item.tag}</Text>
          <Text style={styles.rating}>{item.rating} ★</Text>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.location}>{item.location}</Text>
          <Text style={styles.salary}>{item.salary}</Text>
        </View> 
      */}
    </View>
  );

  return (
    <ScrollView >
    <Carousel
      loop
      width={viewportWidth}
      height={viewportHeight * 0.8} // Responsive height: 30% of the viewport height
      autoPlay={false} // Ensure autoplay is off for manual swiping
      data={data}
      scrollAnimationDuration={1000}
      mode="parallax"
      modeConfig={{
        parallaxAdjacentItemScale: 0.7,
        parallaxScrollingOffset: 80,
      }}
      renderItem={({ item, index }) => renderItem(item, index)}
    />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    overflow: 'hidden',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: '100%', // Ensures image takes full card height
    resizeMode: 'cover', // Ensures the image covers the entire card space
  },
  infoContainer: {
    padding: 10,
  },
  tag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
  rating: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: 5,
    borderRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  location: {
    color: 'gray',
  },
  salary: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default CarouselComponent;

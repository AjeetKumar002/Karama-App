import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react';
// import people from '../../../assets/images/Variant2.png';
// import people2 from '../../../assets/images/Variant2.png';
import people3 from '../../../assets/images/Variant3.png';
import people4 from '../../../assets/images/Variant4.png';
import people5 from '../../../assets/images/Variant5.png';
import people6 from '../../../assets/images/Variant6.png';
import Star from '../../../assets/images/star-5.png';
import Man from '../../../assets/images/Man006.png';
import Girl from '../../../assets/images/girl006.png';
// import ss from '../../../assets/images/heroicons-mini/heroicons-mini/frame-01.png';
import ProfileView from '../profile-view';

// const ProfileScreen = ({ onClose }) => {
//   return (
//     <ScrollView>
//       <Image source={ss} alt="ss" style={{resizeMode: "contain", width: "100%"}}/>
//       {/* You can add a close button or gesture here */}
//       <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//         <Text style={styles.closeButtonText}>Close</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

const LikedYouScreen = ({ isUpgrade, navigation }) => {
  const users = [
    {
      id: '1',
      name: 'Philip',
      age: 25,
      income: '$120,000 / year',
      city: 'Manhattan, New York',
      image: people3,
      gender: 'He / Him',
      genderIcon: Man,
      rating: 4.5,
      icon: Star,
    },
    {
      id: '2',
      name: 'Joe',
      age: 30,
      income: '$120,000 / year',
      city: 'Manhattan, New York',
      image: people4,
      gender: 'He / Him',
      genderIcon: Man,
      rating: 4.5,
      icon: Star,
    },
    {
      id: '3',
      name: 'Mandy',
      age: 27,
      income: '$120,000 / year',
      city: 'Manhattan, New York',
      image: people5,
      gender: 'She / Her',
      genderIcon: Girl,
      rating: 4.5,
      icon: Star,
    },
    {
      id: '4',
      name: 'Becky',
      age: 22,
      income: '$100,000 / year',
      city: 'Manhattan, New York',
      image: people6,
      gender: 'She / Her',
      genderIcon: Girl,
      rating: 4.5,
      icon: Star,
    },
  ];


  const renderUserCard = ({ item }) => {
    return (
      <View style={styles.card}>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileView')}>
          <ImageBackground
            source={item.image}
            style={styles.image}
            blurRadius={isUpgrade ? 0 : 10}
            imageStyle={{ borderRadius: 13}}>
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.genderContainer}>
                  <Image
                    source={item.genderIcon}
                    alt="gender"
                    style={{ width: 11.56, height: 11.56 }}
                  />
                  <Text style={styles.genderText}>{item.gender}</Text>
                </View>
                <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Image
                    source={item.icon}
                    alt="star"
                    style={{ width: 11.28, height: 11.28 }}
                  />
                </View>
              </View>
              <View style={styles.footer}>
                <Text style={styles.name}>
                  {item.name}, {item.age}
                </Text>
                <Text style={styles.city}>{item.city}</Text>
                <Text style={styles.income}>{item.income}</Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
    
        <FlatList
          data={users}
          renderItem={renderUserCard}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapper}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 358,
    marginHorizontal: 'auto',
    marginTop: 30,
    backgroundColor: 'rgba(246, 246, 246, 1)',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 171,
    height: 259.26,
    borderRadius: 13,
  },
  cardContent: {
    height: 240,
    justifyContent: 'space-between',
    marginVertical: 'auto',
  },
  header: {
    width: 154.48,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 'auto',
  },
  genderContainer: {
    backgroundColor: 'rgba(169, 161, 149, 0.59)',
    paddingVertical: 5.14,
    paddingHorizontal: 6,
    borderRadius: 17.98,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5.14,
  },
  genderText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: 'rgba(255, 255, 255, 1)',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2.45,
  },
  ratingText: {
    fontSize: 9.8,
    lineHeight: 11.7,
    fontWeight: '500',
    color: 'rgba(5, 34, 34, 1)',
  },
  footer: {
    width: 154.48,
    marginHorizontal: 'auto',
  },
  name: {
    fontSize: 14.4,
    fontWeight: '600',
    lineHeight: 21.6,
    color: 'rgba(255, 255, 255, 1)',
  },
  city: {
    fontSize: 7.2,
    lineHeight: 10.08,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
  income: {
    fontSize: 10,
    lineHeight: 14,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  closeButton: {
    padding: 10,
    backgroundColor: '#ccc',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 20,
  },
  closeButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default LikedYouScreen;

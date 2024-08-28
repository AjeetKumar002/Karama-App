import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Avtar1 from '../../../../assets/images/avtar-1.png';
import Avtar2 from '../../../../assets/images/avtar-2.png';
import Avtar3 from '../../../../assets/images/avtar-3.png';
import Avtar4 from '../../../../assets/images/avtar-4.png';
import NextGO from '../../../../assets/images/iconNext.png';

const GeneralItem = ({ avatar, text, nextIcon, onPress, navigation }) => {
    return (
      <View style={styles.generalItems}>
        <TouchableOpacity style={styles.content} onPress={onPress}>
          <View style={styles.combine}>
            <Image source={avatar} alt="icon" style={{ width: 13.23, height: 16 }} />
            <Text style={styles.name}>{text}</Text>
          </View>
          <Image source={nextIcon} alt="icon" style={{ width: 24, height: 24 }} />
        </TouchableOpacity>
      </View>
    );
  };

const GeneralContainer = ({ navigation }) => {
    // Array containing data for each item
    const itemsData = [
      {
        id: 1,
        avatar: Avtar1,
        text: 'Edit Profile',
        nextIcon: NextGO,
        screen: 'EditPage',
      },
      {
        id: 2,
        avatar: Avtar2,
        text: 'Preferences',
        nextIcon: NextGO,
        screen: 'Preferences',
      },
      {
        id: 3,
        avatar: Avtar3,
        text: 'Settings',
        nextIcon: NextGO,
        screen: 'SettingsScreen',
      },
      {
        id: 4,
        avatar: Avtar4,
        text: 'Help',
        nextIcon: NextGO,
        screen: 'Help',
      },
      
    ];
  
    return (
      <View style={styles.generalContainer}>
        <Text style={styles.general}>General</Text>
        {itemsData.map((item) => (
          <GeneralItem
            key={item.id}
            avatar={item.avatar}
            text={item.text}
            nextIcon={item.nextIcon}
            onPress={() => navigation.navigate(item.screen)}
          />
        ))}
      </View>
    );
  };

  const styles = StyleSheet.create({
    generalContainer: {
      width: 390,
      marginBottom: 30
    },
    general: {
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 22.4,
      color: "rgba(5, 34, 34, 1)",
      marginTop: 40
    },
    generalItems: {
      width: 358,
      gap: 16
    },
    content: {
      backgroundColor: "rgba(38, 29, 42, 0.05)",
      width:358,
      paddingHorizontal: 24,
      paddingVertical: 16,
      borderRadius: 8,
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 20
    },
    combine: {
      width: 112,
      gap: 10,
      alignItems: "center",
      flexDirection: "row",
    },
    name:{
      fontSize: 16,
      fontWeight: "400",
      lineHeight: 22.4,
      color: "rgba(5, 34, 34, 1)"
    }
  });
  export default GeneralContainer;

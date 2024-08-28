import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header2 from '../../../../../assets/images/discover-header-2.png';
import BackButonTopBar from '../../../../components/backbtn-topbar';
import PhotoPicker from '../../../../components/photo-picker';
import Coss from '../../../../../assets/images/cross.png';
import DiscoverAbout from '../../../../components/discover-about';

export default function EditPage() {
  return (
    <SafeAreaView>
      <BackButonTopBar />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.header}>
          <Text style={styles.profileText}>Profile Photo</Text>
          <View style={styles.profileBox}>
            <Image source={Header2} alt="profile" style={styles.profilePhoto} />
          </View>
          <Text style={styles.editText}>Tap on photo to edit</Text>
        </View>
        <PhotoPicker />
        <View style={styles.promptMain}>
          <View style={styles.Mini}>
          <View style={styles.top}>
            <Text style={styles.head1}>Written Prompts (3)</Text>
            <Text style={styles.edit}>Edit</Text>
          </View>
          <View style={styles.promptBox}>
            <View style={styles.prompt}>
              <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
              </View>
              <Text style={styles.question}>Our go to meal is</Text>
              <Text style={styles.answer}>Pasta ! any pasta at all</Text>
            </View>
            <View style={styles.prompt}>
              <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
              </View>
              <Text style={styles.question}>Our go to meal is</Text>
              <Text style={styles.answer}>Pasta ! any pasta at all</Text>
            </View>
            <View style={styles.prompt}>
              <View style={styles.crossPos}>
                <Image source={Coss} alt="img" style={styles.cross} />
              </View>
              <Text style={styles.question}>Our go to meal is</Text>
              <Text style={styles.answer}>Pasta ! any pasta at all</Text>
            </View>
          </View>
          </View>
        </View>
        <DiscoverAbout />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ScrollView: {
    width: 358.79,
    margin: 'auto',
  },
  header: {
    padding: 16,
    gap: 16,
    alignItems: 'center',
    marginTop: 30,
  },
  profileText: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '600',
    color: 'rgba(38, 29, 42, 0.9)',
  },
  profileBox: {},
  profilePhoto: {
    width: 110.65,
    height: 110.65,
    borderRadius: 100,
  },
  editText: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
    color: 'rgba(38, 29, 42, 0.3)',
  },
  promptMain: {
    width: 358,
    borderRadius: 20,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 20,
    marginTop: 10
  },
  Mini: {
    width: 330 ,
    margin: "auto",
    gap: 16
  },
  top: {
    width: 330,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  head1: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
    color: 'rgba(38, 29, 42, 0.3)',
  },
  edit: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
    color: 'rgba(235, 68, 48, 1)',
  },
  promptBox: {
    width: 330,
    gap: 16,
    margin: 'auto',
  },
  prompt: {
    width: 330,
    height: 76,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  question: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18.2,
    color: 'rgba(38, 29, 42, 0.3)',
  },
  answer: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18.2,
    color: 'rgba(38, 29, 42, 1)',
  },
  crossPos:{
    width: 24.54,
    height: 24.54,
    position: "absolute",
    right: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"   ,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,   
},
cross: {
    width: 8.15,
    height: 8.15,
},
});

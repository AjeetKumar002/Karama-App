import React from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import styles from 'rn-range-slider/styles'
import Man from '../../../assets/images/Man006.png';
import people3 from '../../../assets/images/Variant3.png';
import Girl from '../../../assets/images/girl006.png';
import BG1 from '../../../assets/images/bg-1.png';
import BG2 from '../../../assets/images/bg-2.png';
import BG3 from '../../../assets/images/bg-3.png';
import BG4 from '../../../assets/images/bg-4.png';
import BG5 from '../../../assets/images/bg-5.png';
import BG6 from '../../../assets/images/bg-6.png';
import pet1 from '../../../assets/images/pet-1.png';
import pet5 from '../../../assets/images/pet-5.png';
import pet14 from '../../../assets/images/pet-14.png';
import SpeechBallon from '../../../assets/images/speech-baloon.png';
import BabyBottle from '../../../assets/images/baby-bottle.png';
import Teddy from '../../../assets/images/teddy.png';
import Creative1 from '../../../assets/images/creative-1.png';
import Creative3 from '../../../assets/images/creative-3.png';
import Creative4 from '../../../assets/images/creative-4.png';
import Creative5 from '../../../assets/images/creative-5.png';
import Creative7 from '../../../assets/images/creative-7.png';
import Creative8 from '../../../assets/images/creative-8.png';
import Creative9 from '../../../assets/images/creative-9.png';
import Creative10 from '../../../assets/images/creative-10.png';
import Creative11 from '../../../assets/images/creative-11.png';
import Creative16 from '../../../assets/images/creative-16.png';
import Creative18 from '../../../assets/images/creative-18.png';
import Instruments1 from '../../../assets/images/instruments-1.png';
import Instruments4 from '../../../assets/images/instruments-4.png';
import close from '../../../assets/images/crossX.png';
import star from '../../../assets/images/super-star.png';
import Religion3 from '../../../assets/images/diet-3.png';
import Personality3 from '../../../assets/images/personality-3.png';
import Personality4 from '../../../assets/images/personality-4.png';
import Personality5 from '../../../assets/images/personality-5.png';
import Rule4 from '../../../assets/images/rules-4.png';
import Rule5 from '../../../assets/images/rules-5.png';
import Rule7 from '../../../assets/images/rules-7.png';
import Rule11 from '../../../assets/images/rules-11.png';
import Rule8 from '../../../assets/images/rules-8.png';
import CareGiver9 from '../../../assets/images/caregiver-9.png';
import Needs2 from '../../../assets/images/needs-2.png';
import Education2 from '../../../assets/images/eduction-3.png';
import Needs1 from '../../../assets/images/needs-1.png';
import Requirements2 from '../../../assets/images/requirements-2.png';
import Requirements3 from '../../../assets/images/requirements-3.png';
import Requirements4 from '../../../assets/images/requirements-4.png';
import Requirements5 from '../../../assets/images/requirements-5.png';
import Requirements1 from '../../../assets/images/requirements-1.png';
import Childcare2 from '../../../assets/images/Frame-21-2.png';
import Childcare4 from '../../../assets/images/Frame-21-4.png';
import Childcare12 from '../../../assets/images/Frame-21-12.png';
import Childcare15 from '../../../assets/images/Frame-21-15.png';
import Childcare11 from '../../../assets/images/Frame-21-11.png';
import Childcare7 from '../../../assets/images/Frame-21-7.png';
import Childcare8 from '../../../assets/images/Frame-21-8.png';
import Creative2 from '../../../assets/images/creative-2.png';
import Respon7 from '../../../assets/images/Frame-60213-(7).png';
import Respon4 from '../../../assets/images/Frame-60213-(4).png';
import Respon11 from '../../../assets/images/Frame-60213-(11).png';
import Childcare3 from '../../../assets/images/Frame-21-3.png';
import offer3 from '../../../assets/images/offer-3.png';
import offer5 from '../../../assets/images/offer-5.png';
import offer6 from '../../../assets/images/offer-6.png';
import offer7 from '../../../assets/images/offer-7.png';
import offer8 from '../../../assets/images/offer-8.png';
// import ThreeDot from '';
import SelectedKarama from '../../../assets/images/people-D.png';

// import back from ''

import BadgeComponent from '../badge';
import SimpleBadgeComponent from '../badge/simpleBadge';
export default function DiscoverProfileView({onClose}) {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.back}>
        {/* <View > */}
          <TouchableOpacity style={styles.head} onPress={onClose}>
            <Image
              source={require('../../../assets/images/back.png')}
              alt="back"
              style={{width: 14.6, height: 17.5}}
            />
            <Text style={styles.Nameing}>Williams</Text>
          </TouchableOpacity>
        {/* </View> */}
        <Image
          source={require('../../../assets/images/threeDots.png')}
          alt="dots"
          style={{width: 1.5, height: 13.5}}
        />
      </View>
      <ScrollView style={styles.ScrollView}>
        <View style={{gap: 10}}>
          <View style={styles.card}>
            <ImageBackground
              source={SelectedKarama}
              style={styles.image}
              imageStyle={{
                borderBottomLeftRadius: 12,
                borderBottomRightRadius: 12,
              }}>
              {/* <View style={styles.cardContent}>
                <View style={styles.header}>
                  <View style={styles.genderContainer}>
                    <Image
                      source={Man}
                      alt="gender"
                      style={{width: 11.56, height: 11.56}}
                    />
                    <Text style={styles.genderText}>male</Text>
                  </View> */}
                  {/* <View style={styles.ratingContainer}>
                  <Text style={styles.ratingText}>{item.rating}</Text>
                  <Image
                    source={item.icon}
                    alt="star"
                    style={{ width: 11.28, height: 11.28 }}
                  />
                </View> */}
                {/* </View> */}
                {/* <View style={styles.footer}>
                  <Text style={styles.name}>ajeet</Text>
                  <Text style={styles.city}>karachi</Text>
                  <Text style={styles.income}>1212121</Text>
                </View>
              </View> */}
            </ImageBackground>
          </View>
          <View style={styles.container}>
            <View style={styles.weHave}>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>We have</Text>
                <View style={styles.weHaveImages}>
                  <BadgeComponent
                    BadgeIcon={BabyBottle}
                    BadgeText="Infant"
                    number="1"
                  />
                  <BadgeComponent
                    BadgeIcon={Teddy}
                    BadgeText="Toddler"
                    number="1"
                  />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>We have a</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent BadgeIcon={pet1} BadgeText="Cat" />
                  <SimpleBadgeComponent BadgeIcon={pet14} BadgeText="Frog" />
                  <SimpleBadgeComponent BadgeIcon={pet5} BadgeText="Cow" />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>We speak</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={SpeechBallon}
                    BadgeText="Hausa"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={SpeechBallon}
                    BadgeText="Arbic"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={SpeechBallon}
                    BadgeText="Hindu"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.obsessions}>
            <View style={styles.obCenter}>
              <Text style={styles.weHaveText}>Our current obession is </Text>
              <Text style={styles.para}>
                Chickens! The kids love them and we just got two chicks named Bo
                & Sam.
              </Text>
            </View>
          </View>
          <View style={styles.childMain}>
            <Image source={BG1} alt="img" style={styles.childImg} />
          </View>
          <View style={styles.child}>
            <View style={styles.childCenter}>
              <Text style={styles.weHaveText}>We have</Text>
              <View style={styles.childWrap}>
                <SimpleBadgeComponent BadgeIcon={Creative7} BadgeText="Dance" />
                <SimpleBadgeComponent BadgeIcon={Creative8} BadgeText="DIY" />
                <SimpleBadgeComponent
                  BadgeIcon={Creative10}
                  BadgeText="Drama"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative18}
                  BadgeText="Magic"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Instruments1}
                  BadgeText="Piano"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative11}
                  BadgeText="Gaming"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative9}
                  BadgeText="Painting"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative1}
                  BadgeText="Film Making"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Instruments4}
                  BadgeText="Trumpet"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative16}
                  BadgeText="Arts & Crafts"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative4}
                  BadgeText="Videography"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative3}
                  BadgeText="Photography"
                />
                <SimpleBadgeComponent
                  BadgeIcon={Creative5}
                  BadgeText="Fashion Design"
                />
              </View>
            </View>
          </View>
          <View style={styles.obsessions}>
            <View style={styles.obCenter}>
              <Text style={styles.weHaveText}>Our current obession is </Text>
              <Text style={styles.para}>
                Chickens! The kids love them and we just got two chicks named Bo
                & Sam.
              </Text>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.weHave}>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Our religion</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Religion3}
                    BadgeText="Buddhism"
                  />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Personality</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Personality3}
                    BadgeText="Chill"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Personality4}
                    BadgeText="Patient"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Personality5}
                    BadgeText="Wacky"
                  />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Disability experience</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent BadgeText="Dyslexia" />
                  <SimpleBadgeComponent BadgeText="ADHD" />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.childMain}>
            <Image source={BG3} alt="img" style={styles.childImg} />
          </View>
          <View style={styles.Rules}>
            <View style={styles.rulesHave}>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Household Rules</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Rule4}
                    BadgeText="No Screens"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Rule5}
                    BadgeText="No Vapping"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Rule7}
                    BadgeText="No Hitting"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Rule8}
                    BadgeText="No Bullying"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Rule11}
                    BadgeText="No Smoking"
                  />
                  <SimpleBadgeComponent BadgeIcon={Girl} BadgeText="No Nuts" />
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Montesiori"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.imgCont}>
            <Image source={BG1} alt="img" style={styles.childImg} />
            <Image source={BG5} alt="img" style={styles.childImg} />
          </View>
          <View style={styles.obsessions}>
            <View style={styles.obCenter}>
              <Text style={styles.weHaveText}>Our current obession is </Text>
              <Text style={styles.para}>
                Chickens! The kids love them and we just got two chicks named Bo
                & Sam.
              </Text>
            </View>
          </View>
          <View style={styles.childMain}>
            <Image source={BG6} alt="img" style={styles.childImg} />
          </View>
          <View style={styles.looking}>
            <View style={styles.lookFor}>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>We are looking for ..</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={CareGiver9}
                    BadgeText="Caregiver/Household Manager"
                  />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Start Date</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent BadgeText="06/26/2024" />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Hourly Pay Rate</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Needs2}
                    BadgeText="$20 - $35 "
                  />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Education Level</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Education2}
                    BadgeText="Bachelors Degree"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.schedule}>
            <View style={styles.schduleFor}>
              <View style={{gap: 8}}>
                <Text style={styles.weHaveText}>Schedule</Text>
                <Text style={styles.Hrs}>40 Hours</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Mon : 7am - 70pm"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Tue : 7am - 2pm"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Wed : 4pm - 8pm"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Thur : 7am - 5pm"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Fri : 7am - 70pm"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.work}>
            <View style={styles.workFor}>
              <View style={{gap: 8}}>
                <Text style={styles.weHaveText}>Work Options</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Needs1}
                    BadgeText="Full Time"
                  />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>Requirements </Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Requirements3}
                    BadgeText="First Aid"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Requirements2}
                    BadgeText="Able To Drive"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Requirements4}
                    BadgeText="Can Swim"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Requirements1}
                    BadgeText="Can Travel"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Requirements5}
                    BadgeText="COVID Vaccination"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.responsibilities}>
            <View style={styles.responsibilitiesFor}>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>
                  Childcare Responsibilities
                </Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare2}
                    BadgeText="Bathing"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare11}
                    BadgeText="Tutoring"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare7}
                    BadgeText="Play Dates"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare8}
                    BadgeText="Commuting"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare4}
                    BadgeText="Packing Lunch"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={BabyBottle}
                    BadgeText="Bottle Feeding"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare15}
                    BadgeText="Diaper Change"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare12}
                    BadgeText="Homework Help"
                  />
                </View>
              </View>
              <View style={{gap: 16}}>
                <Text style={styles.weHaveText}>
                  Household Responsibilities
                </Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={Creative2}
                    BadgeText="Cooking"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Respon7}
                    BadgeText="Pet Care"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Childcare3}
                    BadgeText="Meal Prep"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Respon4}
                    BadgeText="Laundry"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Respon11}
                    BadgeText="Deep Housekeeping"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Household Budgeting"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={Girl}
                    BadgeText="Vendor/ Services Management"
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.know}>
            <View style={styles.knowFor}>
              <View style={{gap: 8}}>
                <Text style={styles.weHaveText}>Benifits</Text>
                <View style={styles.weHaveImages}>
                  <SimpleBadgeComponent
                    BadgeIcon={offer3}
                    BadgeText="Yearly Raise"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={offer5}
                    BadgeText="Maternity Leave"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={offer6}
                    BadgeText="Health Insurance"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={offer7}
                    BadgeText="Retirment Account"
                  />
                  <SimpleBadgeComponent
                    BadgeIcon={offer8}
                    BadgeText="Monthly Metro Card"
                  />
                </View>
              </View>
              <View style={styles.knowBox}>
                <View style={styles.kCenter}>
                  <Text style={styles.Hrs}>You Should Know</Text>
                  <Text style={styles.knowpara}>
                    We are a very sports oriented family. Having a caregiver
                    that is passionate about sports is a huge plus.
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* <View style={styles.buttos}>
          <TouchableOpacity onPress={onClose} style={styles.close}>
            <Image
              source={close}
              alt="close"
              style={{width: 16.72, height: 16.72}}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.star}>
            <Image
              source={star}
              alt="close"
              style={{width: 35.28, height: 35.28}}
            />
          </TouchableOpacity>
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginHorizontal: 'auto',
    // marginTop: 30,
    backgroundColor: 'rgba(246, 246, 246, 1)',
  },
  back: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginTop: 20,
    margin: 'auto',
    paddingHorizontal: 10,
  },
  head: {
    width: 115,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Nameing: {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 22.4,
  },
  ScrollView: {
    width: '100%',
  },
  card: {
    flex: 1,
    borderRadius: 10,
    // margin: 5,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 628,
    //   borderRadius: 50,
  },
  cardContent: {
    width: '100%',
    height: 590,
    justifyContent: 'space-between',
    marginVertical: 'auto',
  },
  header: {
    width: 320,
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
  footer: {
    width: 320,
    marginHorizontal: 'auto',
    marginBottom: 40,
  },
  name: {
    fontSize: 32,
    fontWeight: '500',
    lineHeight: 36.48,
    color: 'rgba(255, 255, 255, 1)',
  },
  city: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 1)',
  },
  income: {
    fontSize: 16,
    lineHeight: 22.4,
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
  container: {
    width: '100%',
    height: 334,
    borderRadius: 10,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
  },
  weHave: {
    width: 357,
    // height: 287,
    margin: 'auto',
    gap: 24,
  },
  weHaveText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: 'rgba(38, 29, 42, 1)',
  },
  weHaveImages: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
  obsessions: {
    width: '100%',
    height: 164,
    borderRadius: 10,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    // marginVertical: 10,
  },
  obCenter: {
    width: 357,
    height: 116,
    gap: 16,
    margin: 'auto',
  },
  para: {
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    color: 'rgba(38, 29, 42, 1)',
  },
  childMain: {
    width: '100%',
    height: 325,
    borderRadius: 10,
  },
  childImg: {
    width: '100%',
    height: 325,
    borderRadius: 10,
  },
  child: {
    width: '100%',
    height: 400,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    borderRadius: 10,
    marginVertical: 'auto',
  },
  childCenter: {
    width: 357,
    // height: 416,
    // backgroundColor: "red",
    margin: 'auto',
    gap: 16,
  },
  childWrap: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
  },
  Rules: {
    width: '100%',
    // height: 251,
    paddingVertical: 20,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    borderRadius: 10,
    marginVertical: 'auto',
  },
  rulesHave: {
    width: 357,
    // height: 211,
    margin: 'auto',
  },
  looking: {
    width: '100%',
    height: 400,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    borderRadius: 10,
    gap: 16,
  },
  lookFor: {
    width: 357,
    height: 352.5,
    margin: 'auto',
    gap: 16,
  },
  schedule: {
    width: '100%',
    // height: 352,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    borderRadius: 10,
    // gap: 16,
  },
  schduleFor: {
    width: 357,
    paddingVertical: 20,
    margin: 'auto',
  },
  Hrs: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: 'rgba(235, 68, 48, 1)',
  },
  work: {
    width: '100%',
    height: 326,
    borderRadius: 10,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
  },
  workFor: {
    width: 357,
    height: 278,
    margin: 'auto',
    gap: 16,
  },
  responsibilities: {
    width: '100%',
    height: 620,
    borderRadius: 10,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
  },
  responsibilitiesFor: {
    width: 357,
    // height: 665,
    margin: 'auto',
    gap: 24,
  },
  know: {
    width: '100%',
    height: 482,
    borderRadius: 10,
    gap: 10,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
  },
  knowFor: {
    width: 357,
    height: 460,
    gap: 16,
    margin: 'auto',
  },
  knowBox: {
    width: 357,
    height: 150,
    borderRadius: 20,
    backgroundColor: 'rgba(38, 29, 42, 0.03)',
  },
  kCenter: {
    width: 278,
    margin: 'auto',
    gap: 8,
  },
  knowpara: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: 'rgba(38, 29, 42, 1)',
  },
  buttos: {
    width: 348,
    margin: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  close: {
    width: 60,
    height: 59.35,
    borderRadius: 100,
    backgroundColor: 'rgba(33, 35, 41, 1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  star: {
    width: 60,
    height: 59.35,
    borderRadius: 100,
    backgroundColor: 'rgba(37, 36, 36, 0.49)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

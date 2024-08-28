import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import BabyBottle from '../../../assets/images/baby-bottle.png';
import Creative1 from '../../../assets/images/creative-1.png';
import Creative10 from '../../../assets/images/creative-10.png';
import Creative11 from '../../../assets/images/creative-11.png';
import Creative16 from '../../../assets/images/creative-16.png';
import Creative18 from '../../../assets/images/creative-18.png';
import Creative3 from '../../../assets/images/creative-3.png';
import Creative4 from '../../../assets/images/creative-4.png';
import Creative5 from '../../../assets/images/creative-5.png';
import Creative7 from '../../../assets/images/creative-7.png';
import Creative8 from '../../../assets/images/creative-8.png';
import Creative9 from '../../../assets/images/creative-9.png';
import Religion3 from '../../../assets/images/diet-3.png';
import NextGO from '../../../assets/images/iconNext.png';
import Instruments1 from '../../../assets/images/instruments-1.png';
import Instruments4 from '../../../assets/images/instruments-4.png';
import Personality3 from '../../../assets/images/personality-3.png';
import Personality4 from '../../../assets/images/personality-4.png';
import Personality5 from '../../../assets/images/personality-5.png';
import pet1 from '../../../assets/images/pet-1.png';
import pet14 from '../../../assets/images/pet-14.png';
import pet5 from '../../../assets/images/pet-5.png';
import SpeechBallon from '../../../assets/images/speech-baloon.png';
import Teddy from '../../../assets/images/teddy.png';
import BadgeComponent from '../badge';
import SimpleBadgeComponent from '../badge/simpleBadge';
import Diet2 from '../../../assets/images/Religion-2.png';
import Diet5 from '../../../assets/images/Religion-5.png';
import Lock from '../../../assets/images/lock-closed.png';



export default function DiscoverAbout() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.aboutText}>About Us</Text>
        <View style={styles.header}>
          <View style={styles.combine}>
            <Text style={styles.name}>Name</Text>
            <Text style={styles.answer}>Adebayos</Text>
          </View>
          <Image source={NextGO} alt="icon" style={{width: 24, height: 24}} />
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Description</Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
            <View style={styles.weHaveImages}>
              <SimpleBadgeComponent
                BadgeIcon={NextGO}
                BadgeText="Mom & Dad"
              />
            </View>
          </View>
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Address</Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
            <View style={styles.weHaveImages}>
              <SimpleBadgeComponent
                BadgeIcon={NextGO}
                BadgeText="Manhattan, New York"
              />
            </View>
          </View>
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Ages</Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
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
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>We speak</Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
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
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>We have a</Text>
              <Image source={Lock} alt='lock' style={{width:20, height: 20}} />
            </View>
            <View style={styles.weHaveImages}>
            <SimpleBadgeComponent BadgeIcon={pet1} BadgeText="Cat" />
                  <SimpleBadgeComponent BadgeIcon={pet14} BadgeText="Frog" />
                  <SimpleBadgeComponent BadgeIcon={pet5} BadgeText="Cow" />
            </View>
          </View>
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Our religion</Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
            <View style={styles.weHaveImages}>
            <SimpleBadgeComponent
                    BadgeIcon={Religion3}
                    BadgeText="Buddhism"
                  />
            </View>
          </View>
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Diet</Text>
              <Image source={Lock} alt='lock' style={{width:20, height: 20}} />
            </View>
            <View style={styles.weHaveImages}>
            <SimpleBadgeComponent
                    BadgeIcon={Diet2}
                    BadgeText="Meat Eater"
                  />
            <SimpleBadgeComponent
                    BadgeIcon={Diet5}
                    BadgeText="Sugar Free"
                  />
            </View>
          </View>
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Disability Experience</Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
            <View style={styles.weHaveImages}>
            <SimpleBadgeComponent
                    BadgeIcon={""}
                    BadgeText="Dyslexia"
                  />
            <SimpleBadgeComponent
                    BadgeIcon={""}
                    BadgeText="ADHD"
                  />
            </View>
          </View>
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Our personality</Text>
              <Image source={Lock} alt='lock' style={{width:20, height: 20}} />
            </View>
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
        </View>
        <View style={styles.weHave}>
          <View style={{gap: 16}}>
            <View style={styles.top}>
              <Text style={styles.head1}>Children’s Interests</Text>
              <Text style={styles.edit}>Edit</Text>
            </View>
            <View style={styles.weHaveImages}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 358,
    paddingVertical: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
    marginTop: 10,
  },
  content: {
    width: 318,
    margin: 'auto',
    gap: 16,
  },
  aboutText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 22.4,
    color: 'rgba(38, 29, 42, 0.3)',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  combine: {
    width: 104,
    height: 56,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 18.2,
    color: 'rgba(164, 161, 161, 1)',
  },
  answer: {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
    color: 'rgba(38, 29, 42, 0.9)',
  },
  top: {
    width: 318,
    // margin: 'auto',
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
  weHave: {
    width: 318,
    // height: 287,
    margin: 'auto',
    gap: 16,
  },
  weHaveImages: {
    flexDirection: 'row',
    gap: 16,
    flexWrap: 'wrap',
  },
});

// App.js
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text, Image} from 'react-native';
import KaramaScreen from '../../screens/karama';
import ForU from '../../../assets/images/bottom-logo4.png';
import LikedU from '../../../assets/images/bottom-logo6.png';
import Karama from '../../../assets/images/bottom-logo1.png';
import Matches from '../../../assets/images/bottom-logo2.png';
import Community from '../../../assets/images/bottom-logo3.png';
import SelectedHeart from '../../../assets/images/bottom-logo-slct-5.png';
import SelectedForU from '../../../assets/images/selectedForU.png';
import SelectedMatches from '../../../assets/images/selectedMatches.png';
import SelectedCommunity from '../../../assets/images/selectedCommunity.png';
import SelectedKarama from '../../../assets/images/selectedKarama.png';
import ForYouTab from '../../screens/faimly-profile/for-u/index';
import LikedYouTab from '../../screens/faimly-profile/liked-u/index';
// import DiscoverTab from '../../screens/faimly-profile/discover/index';
import CommunityTab from '../../screens/faimly-profile/community/index';
import MatchesTab from '../../screens/faimly-profile/matches/index.';
import Discover from '../../screens/faimly-profile/discover';


// Dummy screens for navigation
function ScreenPlaceholder({name}) {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>{name} Screen</Text>
    </View>
  );
}

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#EB4430',
        tabBarInactiveTintColor: '#261D2A',
        // tabBarActiveBackgroundColor: '#F6F6F6',
        height: 92,
        tabBarShowLabel: true,
        tabBarItemStyle: {
          margin: 5,
        },
        tabBarLabelStyle: {
          fontSize: 10,
          fontWeight: '500',
          color: "#261D2A",
          lineHeight: 14.83,
          // marginTop: 5
        },
        tabBarStyle: {
        // width: 390,
        // position: 'absolute',
        // bottom: 0,
        width: "100%",
        height: 70,
        paddingTop: 8,
        paddingBottom: 10,
        paddingHorizontal: 16,
        backgroundColor: '#F6F6F6',
        elevation: 0,
        alignSelf: 'center', //
        },
        headerShown: false,
      }} initialRouteName='DiscoverTab'>
      <Tab.Screen
        name="ForYouTab"
        component={ForYouTab}
        options={{
          tabBarLabel: 'For You',

          tabBarIcon: ({focused, color}) => (
            <Image
              source={focused ? SelectedForU : ForU}
              style={{width: 19.5, height: 19.5, resizeMode: 'contain'}}
              // tintColor={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="LikedYouTab"
        component={LikedYouTab}
        options={{
          tabBarLabel: 'Liked You',

          tabBarIcon: ({focused, color}) => (
            <Image
              source={focused ? SelectedHeart : LikedU}
              style={{width: 19.5, height: 19.5, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DiscoverTab"
        component={Discover}
        options={{
          tabBarLabel: 'Discover',

          tabBarIcon: ({focused, color}) => (
            <Image
              source={focused ? SelectedKarama : Karama}
              style={{width: 19.5, height: 19.5, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MatchesTab"
        component={MatchesTab}
        options={{
          tabBarLabel: 'Matches',

          tabBarIcon: ({focused, color}) => (
            <Image
              source={focused ? SelectedMatches : Matches}
              style={{width: 19.5, height: 19.5, resizeMode: 'contain'}}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CommunityTab"
        component={CommunityTab}
        options={{
          tabBarLabel: 'Community',

          tabBarIcon: ({focused, color}) => (
            <Image
              source={focused ? SelectedCommunity : Community}
              style={{width: 19.5, height: 19.5, resizeMode: 'contain'}}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function TabApp() {
  return <MyTabs />;
}

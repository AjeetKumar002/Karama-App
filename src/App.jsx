import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/home/index';
import KaramaScreen from './screens/karama/index';
import OtpSendScreen from './screens/phone-otp';
import PhoneNumber from './screens/phonenumber';
// import QuestionScreen from './screens/questions/index prev';
import DiscoverFilter from './components/discover-filter/indexx';
import DiscoverPageProfile from './components/discverProfile';
import Discover from './screens/faimly-profile/discover';
import QuestionScreen from './screens/questions/index';
import SplashScreen from './screens/splash';
import Start from './screens/start';
// import DiscoverProfileNavigation from './components/discverProfile/navigation';
import SelectedHeart from '../assets/images/bottom-logo-slct-5.png';
import Karama from '../assets/images/bottom-logo1.png';
import Matches from '../assets/images/bottom-logo2.png';
import Community from '../assets/images/bottom-logo3.png';
import ForU from '../assets/images/bottom-logo4.png';
import LikedU from '../assets/images/bottom-logo6.png';
import SelectedCommunity from '../assets/images/selectedCommunity.png';
import SelectedForU from '../assets/images/selectedForU.png';
import SelectedKarama from '../assets/images/selectedKarama.png';
import SelectedMatches from '../assets/images/selectedMatches.png';
import GeneralContainer from './components/discverProfile/general';
import EditPage from './screens/faimly-profile/discover/edit-page';
import ForYouTab from './screens/faimly-profile/for-u/index';
import LikedYouTab from './screens/faimly-profile/liked-u/index';
// import DiscoverTab from './screens/faimly-profile/discover/index';
import { Image } from 'react-native';
import CommunityTab from './screens/faimly-profile/community/index';
import Privacy from './screens/faimly-profile/discover/privacy';
import SettingsScreen from './screens/faimly-profile/discover/setting-page';
import MatchesTab from './screens/faimly-profile/matches/index.';
import Help from './screens/match-screen';
import ProfileView from './components/profile-view';
import LikedYou from './screens/faimly-profile/liked-u/index';
import LikedYouScreen from './components/liked-peoples-profiles';

const Stack = createNativeStackNavigator();

// Create the Bottom Tab Navigator
const Tab = createBottomTabNavigator();
const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Karama"
          component={KaramaScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Phone"
          component={PhoneNumber}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OtpSendScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Start"
          component={Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Questions"
          component={QuestionScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const BottomTabNavigator = () => {
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
          color: '#261D2A',
          lineHeight: 14.83,
          // marginTop: 5
        },
        tabBarStyle: {
          // width: 390,
          // position: 'absolute',
          // bottom: 0,
          width: '100%',
          height: 70,
          paddingTop: 8,
          paddingBottom: 10,
          paddingHorizontal: 16,
          backgroundColor: '#F6F6F6',
          elevation: 0,
          alignSelf: 'center', //
        },
        headerShown: false,
      }}
      initialRouteName="DiscoverTab">
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
        name="LikedStack"
        component={LikedStack}
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
        component={DiscoverStack}
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
};

const DiscoverStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GeneralContainer"
        component={GeneralContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditPage"
        component={EditPage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Privacy"
        component={Privacy}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Help"
        component={Help}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DiscoverFilter"
        component={DiscoverFilter}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DiscoverPageProfile"
        component={DiscoverPageProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
const LikedStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LikedYouScreen"
        component={LikedYouScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProfileView"
        component={ProfileView}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default App;

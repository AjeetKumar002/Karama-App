import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Switch,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from 'react-native';
import BackButonTopBar from '../../../../components/backbtn-topbar';
import NextGO from '../../../../../assets/images/iconNext.png';

const SettingsScreen = () => {
  const [pause, setPause] = React.useState(false);
  const [showLastActive, setShowLastActive] = React.useState(true);

  return (
    <SafeAreaView>
      <ScrollView>
        <BackButonTopBar />
        <View style={styles.container}>
          <View style={styles.switchContainer}>
            <View style={styles.section}>
              <View style={styles.option}>
                <Text style={styles.optionTitle}>Pause</Text>
                <Switch
                  value={pause}
                  onValueChange={setPause}
                  thumbColor={pause ? '#EB4430' : '#A4A1A1'}
                />
              </View>
              <Text style={styles.optionDescription}>
                Pausing prevents your profile from being shown to new people.
                You can still chat with your current matches.
              </Text>
            </View>
            <View style={styles.section}>
              <View style={styles.option}>
                <Text style={styles.optionTitle}>Show Last Active Status</Text>
                <Switch
                  value={showLastActive}
                  onValueChange={setShowLastActive}
                  thumbColor={showLastActive ? '#EB4430' : '#A4A1A1'}
                />
              </View>
              <Text style={styles.optionDescription}>
                People viewing your profile can see your last active status.
                Your active status won't be shown if you disable this.
              </Text>
            </View>
          </View>

          <View style={styles.contact}>
            <Text style={styles.continfo}>Phone & Email</Text>
            <TouchableOpacity style={styles.linkSection}>
              <Text style={styles.linkText}>+234902876292</Text>
              <Image
                source={NextGO}
                alt="icon"
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkSection}>
              <Text style={styles.linkText}>zokomike1@gmail.com</Text>
              <Image
                source={NextGO}
                alt="icon"
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contact}>
            <Text style={styles.continfo}>Notifications</Text>
            <TouchableOpacity style={styles.linkSection}>
              <Text style={styles.linkText}>Push Notifications</Text>
              <Image
                source={NextGO}
                alt="icon"
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkSection}>
              <Text style={styles.linkText}>Emails</Text>
              <Image
                source={NextGO}
                alt="icon"
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contact}>
            <Text style={styles.continfo}>Legal</Text>
            <TouchableOpacity style={styles.linkSection}>
              <Text style={styles.linkText}>Privacy Policy</Text>
              <Image
                source={NextGO}
                alt="icon"
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.linkSection}>
              <Text style={styles.linkText}>Terms of service</Text>
              <Image
                source={NextGO}
                alt="icon"
                style={{width: 24, height: 24}}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.contact}>
            <Text style={styles.continfo}>For Support Please Email </Text>
            <View style={styles.linkSection}>
              <Text style={styles.linkText}>support@karamacare.com</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.deleteButton}>
            <Text style={styles.deleteButtonText}>Delete account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={styles.logoutButtonText}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 20,
    margin: 'auto',
    gap: 10,
    // backgroundColor: '#F2F2F2',
    marginTop: 30
  },
  switchContainer: {
    width: 358,
    borderRadius: 20,
    gap: 16,
    paddingVertical: 20,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
  },
  section: {
    width: 318,
    margin: 'auto',
    gap: 8,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(38, 29, 42, 0.9)',
  },
  optionDescription: {
    fontSize: 14,
    color: 'rgba(38, 29, 42, 0.3)',
    marginTop: 5,
  },
  contact: {
    width: 358,
    borderRadius: 20,
    gap: 24,
    paddingVertical: 20,
    backgroundColor: 'rgba(38, 29, 42, 0.05)',
  },
  continfo: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: '400',
    color: 'rgba(38, 29, 42, 0.3)',
    width: 318,
    margin: 'auto',
  },
  linkSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 318,
    margin: 'auto',
  },
  linkText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'rgba(38, 29, 42, 0.9)',
    lineHeight: 22.4,
  },
  deleteButton: {
    width: 358,
    backgroundColor: 'rgba(38, 29, 42, 0.1)',
    paddingVertical: 15.5,
    paddingVerticalVertical: 28,
    alignItems: 'center',
    borderRadius: 28,
  },
  deleteButtonText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22.4,
    color: 'rgba(38, 29, 42, 0.3)',
  },
  logoutButton: {
    width: 358,
    backgroundColor: 'rgba(235, 68, 48, 1)',
    paddingVertical: 15.5,
    paddingVerticalVertical: 28,
    alignItems: 'center',
    borderRadius: 28,
  },
  logoutButtonText: {
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 22.4,
    color: 'rgba(255, 255, 255, 1)',
  },
});

export default SettingsScreen;

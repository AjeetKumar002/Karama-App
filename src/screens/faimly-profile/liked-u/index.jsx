import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import LikedProfile from '../../../components/liked-peoples-profiles';
import LikeYouTopBar from '../../../components/liked-top-bar';
import UpgradeBar from '../../../components/upgrade';

export default function LikedYou() {
  const [isUpgrade, setIsUpgrade] = useState(false);

  const handleUpgrae = () => {
    setIsUpgrade(true);
  };

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <LikeYouTopBar title="Liked You" start="Stars(2)" />
      <LikedProfile isUpgrade={isUpgrade} />
      {!isUpgrade && <UpgradeBar handleUpgrae={handleUpgrae} />}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#F6F6F6',
    flex: 1,
  },
});

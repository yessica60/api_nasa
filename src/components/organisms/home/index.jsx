import React from 'react';
import { View, StyleSheet } from 'react-native';
import TodaysImage from '../../molecules/todays-image';
import Header from '../../molecules/header';
import LastFiveDaysImages from '../../molecules/last-five-days';
import { useImageLoader } from '../../../hooks/useImageLoader';


export default function Home() {
  const { todaysImage, lastFiveDaysImage } = useImageLoader();

  return (
    <View style={styles.container}>
      <Header />
      <TodaysImage {...todaysImage} />
      <LastFiveDaysImages LastFiveDaysImages={lastFiveDaysImage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(7,26,93,255)',
  },
});

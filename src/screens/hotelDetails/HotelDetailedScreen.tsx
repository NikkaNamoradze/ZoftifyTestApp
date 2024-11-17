import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import AvailabilityButton from '../../components/hotelDetails/AvailabilityButton';
import BackButton from '../../components/hotelDetails/BackButton';
import HotelImage from '../../components/hotelDetails/HotelImage';
import HotelOverview from '../../components/hotelDetails/HotelOverview';
import Typography from '../../components/typography/Typography';

const HotelDetailsScreen = () => {
  return (
    <View style={styles.container}>
      <BackButton />
      <HotelImage />
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Typography
          style={styles.title}
          children={'Hilton Garden Inn Manchester Emirates Old Trafford'}
          fontWeight={600}
          size={22}
          color={'#333333'}
        />
        <HotelOverview />
      </ScrollView>
      <AvailabilityButton />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingBottom: 40,
  },
  title: {
    marginTop: 20,
    alignSelf: 'flex-start',
    marginHorizontal: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default HotelDetailsScreen;

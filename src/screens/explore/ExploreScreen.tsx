import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import HotelCard from '../../components/hotelCard/HotelCard';

const ExploreScreen = () => {
  return (
    //should use SafeAreaView, but detailed hotels page navigation won't be smooth because of design
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollViewContent}>
        <HotelCard />
        <HotelCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  scrollView: {
    width: '100%',
  },
  scrollViewContent: {
    alignItems: 'center',
    gap: 12,
    paddingTop: 70,
    paddingBottom: 20,
  },
});

export default ExploreScreen;

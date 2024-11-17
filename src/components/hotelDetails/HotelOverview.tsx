import React from 'react';
import {View, StyleSheet} from 'react-native';
import Typography from '../typography/Typography';
import {colors} from '../../../assets/colors/colors';

const HotelOverview = () => (
  <View style={styles.overviewContainer}>
    <Typography
      children={'Overview'}
      fontWeight={600}
      size={18}
      color={colors.grey[100]}
    />
    <Typography
      children={
        'Welcome to Hilton Garden Inn Manchester Emirates Old Trafford, your premier destination for luxury accommodation in the heart of Manchester. Situated adjacent to the iconic Emirates Old Trafford cricket ground.'
      }
      fontWeight={400}
      size={14}
      color={colors.grey[100]}
    />
  </View>
);

const styles = StyleSheet.create({
  overviewContainer: {
    marginTop: 32,
    gap: 16,
    marginHorizontal: 16,
  },
});

export default HotelOverview;

import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import Typography from '../typography/Typography';

const HotelCardPricing = () => {
  return (
    <View style={styles.bottomRowContainer}>
      <View style={styles.priceContainer}>
        <View style={styles.priceTag}>
          <Typography
            color={colors.secondary[100]}
            size={12}
            fontWeight={600}
            children={'$$$$'}
          />
        </View>
        <Image
          source={require('../../../assets/images/BookingLogo.png')}
          style={styles.bookingLogo}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  priceContainer: {
    gap: 10,
  },
  priceTag: {
    backgroundColor: colors.secondary[10],
    width: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },
  bookingLogo: {
    height: 12.39,
    width: 75,
  },
});

export default HotelCardPricing;

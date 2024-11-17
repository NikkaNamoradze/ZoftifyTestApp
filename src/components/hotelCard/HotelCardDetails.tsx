import React from 'react';
import {StyleSheet, View} from 'react-native';
import {colors} from '../../../assets/colors/colors';
import RouteIcon from '../../../assets/icons/exploreScreenIcons/RouteIcon';
import StarIcon from '../../../assets/icons/exploreScreenIcons/StarIcon';
import Typography from '../typography/Typography';

const HotelCardDetails = () => {
  return (
    <View>
      <View style={styles.topRowContainer}>
        <View style={styles.routeContainer}>
          <RouteIcon />
          <Typography
            fontWeight={500}
            size={12}
            children={'8 mins walking'}
            color={colors.grey[100]}
          />
        </View>
        <View style={styles.ratingContainer}>
          <StarIcon />
          <Typography
            children={'7.7'}
            size={12}
            fontWeight={500}
            color={colors.primary[120]}
          />
        </View>
      </View>
      <Typography
        children={'Hilton Garden Inn Manchester Emirates Old Trafford'}
        fontWeight={600}
        size={14}
        color={colors.grey[100]}
        style={styles.hotelName}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  topRowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  routeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary['05'],
    paddingHorizontal: 4,
    paddingVertical: 3,
    borderRadius: 6,
  },
  hotelName: {
    marginTop: 8,
  },
});

export default HotelCardDetails;

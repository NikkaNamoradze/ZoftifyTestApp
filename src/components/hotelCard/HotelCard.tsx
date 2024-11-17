import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import HotelCardDetails from '../../components/hotelCard/HotelCardDetails';
import HotelCardImage from '../../components/hotelCard/HotelCardImage';
import HotelCardPricing from '../../components/hotelCard/HotelCardPricing';
import HotelCardPricesButton from '../../components/hotelCard/HotelCardPricingButton';
import { AuthorizedStackParamList } from '../../types/AuthorizedStackParamList';

const HotelCard = () => {
  const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();

  const handleNavigateToDetailedScreen = () => {
    navigation.navigate('HotelDetailsScreen');
  };

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      activeOpacity={0.9}
      onPress={handleNavigateToDetailedScreen}>
      <HotelCardImage />
      <View style={styles.textContainer}>
        <HotelCardDetails />
        <View style={styles.cardPricing}>
          <HotelCardPricing />
          <HotelCardPricesButton />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '95%',
    borderRadius: 24,
    backgroundColor: colors.grey['00'],
    borderWidth: 1,
    borderColor: colors.grey[10],
  },
  textContainer: {
    margin: 20,
  },
  cardPricing: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default HotelCard;

import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import { AuthorizedStackParamList } from '../../types/AuthorizedStackParamList';
import Typography from '../typography/Typography';

const HotelCardPricesButton = () => {
  const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();
  const navigateToZoftify = () => {
    navigation.navigate('ZoftifyWebViewScreen');
  };
  return (
    <TouchableOpacity
      style={styles.viewPricesButton}
      activeOpacity={0.8}
      onPress={navigateToZoftify}>
      <Typography
        size={12}
        fontWeight={600}
        color={colors.grey['00']}
        children={'View Prices'}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  viewPricesButton: {
    backgroundColor: colors.primary[100],
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 32,
  },
});

export default HotelCardPricesButton;

import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import { AuthorizedStackParamList } from '../../types/AuthorizedStackParamList';
import Typography from '../typography/Typography';

const AvailabilityButton = () => {
  const navigation = useNavigation<NavigationProp<AuthorizedStackParamList>>();
  const navigateToZoftify = () => {
    navigation.navigate('ZoftifyWebViewScreen');
  };
  return (
    <TouchableOpacity style={styles.button} onPress={navigateToZoftify}>
      <Typography
        children={'Check availability'}
        fontWeight={600}
        size={16}
        color={colors.grey['00']}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary[100],
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 107,
    paddingVertical: 12,
    marginHorizontal: 16,
  },
});

export default AvailabilityButton;

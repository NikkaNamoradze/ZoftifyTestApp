import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BackArrowIcon from '../../../assets/icons/detailedScreenIcons/BackArrowIcon';
import { colors } from '../../../assets/colors/colors';

const BackButton = () => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <BackArrowIcon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: colors.grey['00'],
    height: 40,
    width: 40,
    borderRadius: 20,
    position: 'absolute',
    zIndex: 1,
    left: 8,
    top: 52,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default BackButton;

import React from 'react';
import {Image, StyleSheet} from 'react-native';

const HotelCardImage = () => {
  return (
    <Image
      source={{
        uri: 'https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc=',
      }}
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    height: 245,
    width: '100%',
  },
});

export default HotelCardImage;

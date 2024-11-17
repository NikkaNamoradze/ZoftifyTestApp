import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';

const ZoftifyWebViewScreen = () => {
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://zoftify.com'}} style={styles.webview} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'flex-end',
  },
  webview: {
    flex: 1,
  },
});

export default ZoftifyWebViewScreen;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const DiscoverScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DiscoverScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
});

export default DiscoverScreen;

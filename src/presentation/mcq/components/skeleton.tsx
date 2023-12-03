import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import {View} from 'react-native';

const Skeleton = () => {
  return <View style={styles.page} />;
};

const styles = StyleSheet.create({
  page: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Skeleton;

import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const TimerDisplay = ({style}) => {
  //add timer slice
  return (
    <View style={[styles.container, style]}>
      <Image
        width={20}
        style={styles.image}
        source={require('../../../../assets/images/timer.png')}
      />
      <Text style={styles.text}>10m</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  text: {
    fontSize: 14,
    fontFamily: 'SF Pro Rounded',
    fontWeight: '400',
    color: 'rgba(255, 255, 255, 0.60)',
  },
  image: {
    marginRight: 4,
  },
});

export default TimerDisplay;

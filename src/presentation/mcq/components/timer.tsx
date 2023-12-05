import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {useAppSelector} from '../../../core/redux/hooks';

const TimerDisplay = ({style}: {style: ViewStyle}) => {
  const seconds = useAppSelector(state => state.timer.seconds);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    setMinutes(Math.floor(seconds / 60));
  }, [seconds]);

  return (
    <View style={[styles.container, style]}>
      <Image
        width={20}
        style={styles.image}
        source={require('../../../../assets/images/timer.png')}
      />
      <Text style={styles.text}>{minutes}m</Text>
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

import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, Text, View} from 'react-native';

const ActionItem = ({
  icon,
  label,
}: {
  icon: ImageSourcePropType;
  label: string;
}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    width: 45,
  },
  icon: {
    width: 30,
    height: 30,
  },
  label: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'SF Pro Rounded',
    fontSize: 12,
    letterSpacing: -0.12,
  },
});

export default ActionItem;

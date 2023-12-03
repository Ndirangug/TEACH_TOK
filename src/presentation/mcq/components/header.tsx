import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text>header</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 31,
    backgroundColor: 'green',
    marginLeft: 16,
    marginRight: 8,
  },
});

export default Header;

import React from 'react';
import {Image, StyleSheet, Text, View, ViewStyle} from 'react-native';
import TimerDisplay from './timer';

const Header = ({style}: {style: ViewStyle}) => {
  return (
    <View style={[styles.container, style]}>
      <TimerDisplay style={{flex: 1}} />
      <View style={styles.forYouContainer}>
        <Text style={styles.forYouText}>For You</Text>
        <View style={styles.line} />
      </View>
      <View style={styles.searchContainer}>
        <Image
          width={22}
          source={require('../../../../assets/images/search.png')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 31,
    marginLeft: 16,
    marginRight: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 70,
    flexDirection: 'row',
  },
  forYouContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: 5,
    flex: 1,
  },
  forYouText: {
    fontWeight: '600',
    fontFamily: 'SF Pro Rounded',
    fontSize: 16,
    color: 'white',
    lineHeight: 22,
  },
  line: {
    borderBottomColor: 'white',
    borderBottomWidth: 4,
    width: 30,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default Header;

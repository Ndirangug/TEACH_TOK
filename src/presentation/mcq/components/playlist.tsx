import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {padding} from '../../../utils/helpers';

const Playlist = ({title}: {title?: string}) => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={require('../../../../assets/images/playlist_icon.png')}
        />
        <Text style={styles.title}>{title}</Text>
      </View>

      <Image source={require('../../../../assets/images/chevron-right.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
    backgroundColor: '#161616',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexDirection: 'row',
    ...padding(10, 16),
  },
  titleContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontFamily: 'SF Pro Rounded',
    fontWeight: '600',
    color: 'white',
    fontSize: 13,
    marginLeft: 4,
  },
});

export default Playlist;

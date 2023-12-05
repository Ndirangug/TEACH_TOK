import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

const FollowButton = ({avatarUrl}: {avatarUrl?: string}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: avatarUrl,
        }}
      />
      <View style={styles.followBtn}>
        <Image source={require('../../../../assets/images/follow.png')}></Image>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginBottom: 11,
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 45,
    borderColor: 'white',
    borderWidth: 1,
    boxShadow: '1px 1.5px 2px 0px rgba(0, 0, 0, 0.45)',
  },
  followBtn: {
    position: 'absolute',
    bottom: -11,
    width: 22,
    height: 22,
    left: '50%',
    transform: [{translateX: -20}],
  },
});

export default FollowButton;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const UserAndTitle = ({user, title}: {user?: string; title?: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 6,
  },
  title: {
    color: 'white',
    fontFamily: 'SF Pro Rounded',
    fontSize: 15,
    fontWeight: '600',
  },
  user: {
    color: 'white',
    fontFamily: 'SF Pro Rounded',
    fontSize: 13,
    fontWeight: '400',
  },
});

export default UserAndTitle;

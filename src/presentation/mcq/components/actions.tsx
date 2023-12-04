import React from 'react';
import {StyleSheet, View} from 'react-native';
import ActionItem from './actionItem';

const Actions = () => {
  return (
    <View style={styles.container}>
      <ActionItem
        icon={require('../../../../assets/images/like.png')}
        label="87"
      />
      <ActionItem
        icon={require('../../../../assets/images/comments.png')}
        label="2"
      />
      <ActionItem
        icon={require('../../../../assets/images/bookmark.png')}
        label="203"
      />
      <ActionItem
        icon={require('../../../../assets/images/share.png')}
        label="17"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    alignSelf: 'stretch',
    gap: 15,
    justifyContent: 'flex-end',
  },
});

export default Actions;

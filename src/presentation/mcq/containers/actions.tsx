import React from 'react';
import {StyleSheet, View} from 'react-native';
import ActionItem from '../components/actionItem';
import FollowButton from '../components/followButton';

const Actions = ({avatarUrl}: {avatarUrl?: string}) => {
  return (
    <View style={styles.container}>
      <FollowButton avatarUrl={avatarUrl} />

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
    paddingBottom: 16,
  },
});

export default Actions;

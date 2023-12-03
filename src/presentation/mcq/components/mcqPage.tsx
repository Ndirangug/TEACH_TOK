import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {MCQStateItem} from '../../../core/redux/mcq/mcqSlice';
import Playlist from './playlist';
import Skeleton from './skeleton';

const MCQPage = ({mcq}: {mcq: MCQStateItem}) => {
  return mcq.questionLoading ? (
    <Skeleton />
  ) : (
    <ImageBackground
      source={{uri: mcq.image}} // Replace with the URL to your image
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentContainer} />
          <View style={styles.actionsContainer} />
        </View>
        <Playlist title={mcq.playlist} />
      </SafeAreaView>
    </ImageBackground>

    //background
    //safearea
    //titlebar - counter, for you, search -very top
    //
    // question
    // options
    // actions
    //
    //footer-very bottom
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    paddingLeft: 16,
    paddingRight: 8,
  },
  actionsContainer: {
    backgroundColor: 'red',
    height: '100%',
    flex: 1,
  },
  contentContainer: {
    backgroundColor: 'blue',
    height: '100%',
    width: '100%',
    flex: 5,
    marginRight: 12,
  },
});

export default MCQPage;

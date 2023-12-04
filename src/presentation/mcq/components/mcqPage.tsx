import React, {useEffect} from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {MCQStateItem} from '../../../core/redux/mcq/mcqSlice';
import {padding} from '../../../utils/helpers';
import AnswerOption from './answerOption';
import Playlist from './playlist';
import Skeleton from './skeleton';
import UserAndTitle from './userAndTitle';

const MCQPage = ({mcq}: {mcq: MCQStateItem}) => {
  useEffect(() => {
    console.log('mcq', mcq);
  }, [mcq]);

  return mcq.questionLoading ? (
    <Skeleton />
  ) : (
    <ImageBackground
      source={{uri: mcq.image}} // Replace with the URL to your image
      style={styles.backgroundImage}>
      <SafeAreaView style={styles.container}>
        <View style={styles.content}>
          <View style={styles.contentContainer}>
            <View style={styles.questionContainer}>
              <Text style={styles.question}>{mcq.question}</Text>
            </View>

            <View style={styles.answersAndInfoContainer}>
              {mcq.options?.map(choice => (
                <AnswerOption answer={choice} />
              ))}
            </View>

            <View>
              <UserAndTitle user={mcq.user?.name} title={mcq.description} />
            </View>
          </View>
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
    paddingTop: 99,
    display: 'flex',
    paddingBottom: 16,
  },
  questionContainer: {
    flex: 1,
    alignItems: 'flex-start',
    ...padding(40, 0),
  },
  question: {
    color: 'white',
    fontFamily: 'SF Pro Rounded',
    fontSize: 22,
    fontWeight: '500',
    backgroundColor: 'rgba(0,0,0, 0.25)',
    borderRadius: 8,
  },
  answersAndInfoContainer: {
    flex: 1,
    alignItems: 'flex-start',
    gap: 8,
    marginBottom: 24,
  },
});

export default MCQPage;

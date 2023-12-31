import React from 'react';
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {MCQStateItem} from '../../../core/redux/mcq/mcqSlice';
import {padding} from '../../../utils/helpers';
import Actions from '../containers/actions';
import UserAndTitle from '../containers/userAndTitle';
import AnswerOption from './answerOption';
import Playlist from './playlist';
import Skeleton from './skeleton';

const MCQPage = ({mcq}: {mcq: MCQStateItem}) => {
  return mcq.questionLoading ? (
    <Skeleton />
  ) : (
    <ImageBackground source={{uri: mcq.image}} style={styles.backgroundImage}>
      <LinearGradient
        colors={['rgba(0, 0, 0, 0.45)', 'rgba(0, 0, 0, 0.45)']}
        style={styles.linearGradient}>
        <SafeAreaView style={styles.container}>
          <View style={styles.content}>
            <View style={styles.contentContainer}>
              <View style={styles.questionContainer}>
                <Text style={styles.question}>{mcq.question}</Text>
              </View>

              <View style={styles.answersAndInfoContainer}>
                {mcq.options?.map((choice, i) => (
                  <AnswerOption
                    key={choice.id}
                    answer={choice}
                    correctAnswers={mcq.correctAnswers}
                    tauntDelay={i * 500}
                  />
                ))}
              </View>

              <View>
                <UserAndTitle user={mcq.user?.name} title={mcq.description} />
              </View>
            </View>
            <View style={styles.actionsContainer}>
              <Actions avatarUrl={mcq.user?.avatar} />
            </View>
          </View>
          <Playlist title={mcq.playlist} />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 50,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  linearGradient: {
    flex: 1,
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
    height: '100%',
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  contentContainer: {
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
    padding: 6,
    backgroundColor: 'rgba(0,0,0, 0.5)',
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

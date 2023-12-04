import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const AnswerOption = ({
  answer,
  correctAnswers,
}: {
  answer: MCQChoice;
  correctAnswers?: MCQChoice[];
}) => {
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);

  useEffect(() => {
    if (answerRevealed) {
      setIsCorrectAnswer(
        !!correctAnswers?.flatMap(_answer => _answer.id).includes(answer.id),
      );

      setBackgroundStyle(
        isCorrectAnswer ? styles.correctAnswer : styles.wrongAnswer,
      );
    } else {
      setBackgroundStyle({});
    }
  }, [answer.id, correctAnswers, isCorrectAnswer, answerRevealed]);

  const revealAnswer = () => {
    setAnswerRevealed(true);
  };

  return (
    <TouchableNativeFeedback onPress={revealAnswer}>
      <View style={[styles.container, backgroundStyle]}>
        {answerRevealed ? (
          <View
            style={
              isCorrectAnswer
                ? styles.correctthumbsIcon
                : styles.wrongthumbsIcon
            }>
            <FastImage
              resizeMode="contain"
              style={{width: 56, height: 56}}
              source={
                isCorrectAnswer
                  ? require('../../../../assets/images/thumbs_up.gif')
                  : require('../../../../assets/images/thumbs_down.gif')
              }
            />
          </View>
        ) : (
          <View />
        )}
        <ScrollView>
          <Text style={styles.text}>{answer.answer}</Text>
        </ScrollView>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 294,
    height: 52,
    alignItems: 'center',
    gap: 10,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    position: 'relative',
  },
  text: {
    width: 266,
    textShadow: '1px 1.5px 2px rgba(0, 0, 0, 0.45)',
    fontFamily: 'SF Pro Rounded',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'white',
  },
  wrongAnswer: {
    backgroundColor: 'rgba(220, 95, 95, 0.70) !important',
  },
  correctAnswer: {
    backgroundColor: 'rgba(40, 177, 143, 0.70) !important',
  },
  correctthumbsIcon: {
    position: 'absolute',
    right: 0,
    top: -10,
  },
  wrongthumbsIcon: {
    position: 'absolute',
    right: 0,
    top: 9,
  },
});

export default AnswerOption;

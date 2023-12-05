import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Easing,
  LayoutChangeEvent,
  ScrollView,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';

const AnswerOption = ({
  answer,
  correctAnswers,
  tauntDelay,
}: {
  answer: MCQChoice;
  correctAnswers?: MCQChoice[];
  tauntDelay: number;
}) => {
  const [answerRevealed, setAnswerRevealed] = useState(false);
  const [backgroundStyle, setBackgroundStyle] = useState({});
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [containerWidth, setContainerWIdth] = useState(0);
  const [textWidth, setTextWIdth] = useState(0);

  const scrollX = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const tauntAnimation = () => {
      Animated.sequence([
        Animated.timing(scrollX, {
          toValue: -30,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
          delay: tauntDelay,
        }),
        Animated.timing(scrollX, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
          delay: tauntDelay,
        }),
        Animated.timing(scrollX, {
          toValue: -30,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
          delay: tauntDelay,
        }),
        Animated.timing(scrollX, {
          toValue: 0,
          duration: 500,
          easing: Easing.linear,
          useNativeDriver: false,
          delay: tauntDelay,
        }),
      ]).start();
    };

    if (textWidth > containerWidth) {
      tauntAnimation();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textWidth]);

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

  const onContainerLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setContainerWIdth(width);
  };

  const onTextLayout = (event: LayoutChangeEvent) => {
    const {width} = event.nativeEvent.layout;
    setTextWIdth(width);
  };

  return (
    <View
      onLayout={onContainerLayout}
      style={[styles.container, backgroundStyle]}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <TouchableNativeFeedback onLayout={onTextLayout} onPress={revealAnswer}>
          <Animated.Text
            style={{...styles.text, transform: [{translateX: scrollX}]}}>
            {answer.answer}
          </Animated.Text>
        </TouchableNativeFeedback>
      </ScrollView>

      {answerRevealed ? (
        <View
          style={
            isCorrectAnswer ? styles.correctthumbsIcon : styles.wrongthumbsIcon
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: 294,
    height: 52,
    alignItems: 'flex-start',
    gap: 10,
    padding: 12,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    borderRadius: 8,
    position: 'relative',
    justifyContent: 'center',
  },
  text: {
    //textShadow: '1px 1.5px 2px rgba(0, 0, 0, 0.45)',
    fontFamily: 'SF Pro Rounded',
    fontSize: 17,
    fontStyle: 'normal',
    fontWeight: '500',
    color: 'white',
    minWidth: 294,
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
  scrolView: {
    width: '100%',
  },
});

export default AnswerOption;

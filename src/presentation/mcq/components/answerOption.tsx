import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

const AnswerOption = ({answer}: {answer: MCQChoice}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.text}>{answer.answer}</Text>
      </ScrollView>
    </View>
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
});

export default AnswerOption;

import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {MCQStateItem} from '../../../core/redux/mcq/mcqSlice';

const MCQPage = ({mcq}: {mcq: MCQStateItem}) => {
  return (
    <View style={styles.page}>
      <Text>{mcq.questionLoading ? 'loading...' : mcq.question} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MCQPage;

// src/presentation/question/containers/QuestionFeed.js
import React, {useEffect} from 'react';
import {FlatList, Text, TouchableHighlight, View} from 'react-native';
import MCQUseCase from '../../../core/domain/mcq/mcqUseCase';
import {useAppSelector} from '../../../core/redux/hooks';

const QuestionFeed = () => {
  const questions = useAppSelector(state => state.mcq.questions);
  //scroll, when get to

  useEffect(() => {
    //run once,
    //populate the list
    //if get to end, fetch more
    //render state as infinte list
    fetchMore();
  }, []);

  const fetchMore = () => {
    console.log('fetching more');
    MCQUseCase.fetchQuestion();
  };

  return (
    <FlatList
      onEndReached={fetchMore}
      data={questions}
      renderItem={({item, index, separators}) => (
        <TouchableHighlight
          key={index}
          onShowUnderlay={separators.highlight}
          onHideUnderlay={separators.unhighlight}>
          <View style={{backgroundColor: 'white'}}>
            <Text>{item.question}</Text>
          </View>
        </TouchableHighlight>
      )}
    />
  );
};

export default QuestionFeed;

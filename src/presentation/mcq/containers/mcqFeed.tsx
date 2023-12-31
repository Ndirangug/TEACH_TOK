// src/presentation/question/containers/QuestionFeed.js
import React, {useEffect} from 'react';
import {Dimensions, SafeAreaView, StyleSheet} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MCQUseCase from '../../../core/domain/mcq/mcqUseCase';
import {useAppSelector} from '../../../core/redux/hooks';
import {MCQStateItem} from '../../../core/redux/mcq/mcqSlice';
import Header from '../components/header';
import MCQPage from '../components/mcqPage';

const MCQFeed = () => {
  const questions = useAppSelector(state => state.mcq.questions);

  useEffect(() => {
    fetchMore();
  }, []);

  const fetchMore = () => {
    MCQUseCase.fetchQuestion();
    MCQUseCase.fetchQuestion();
    MCQUseCase.fetchQuestion();
  };

  const _renderItem = ({item, index}: {item: MCQStateItem; index: number}) => {
    return <MCQPage key={index} mcq={item} />;
  };

  return (
    <SafeAreaView>
      <Header style={styles.header} />
      <Carousel
        data={questions}
        renderItem={_renderItem}
        sliderHeight={Dimensions.get('window').height}
        itemHeight={Dimensions.get('window').height}
        vertical={true}
        lockScrollWhileSnapping={true}
        inactiveSlideScale={0.95}
        inactiveSlideOpacity={0.7}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 24,
    left: 0,
    right: 0,
    zIndex: 1,
  },
});

export default MCQFeed;

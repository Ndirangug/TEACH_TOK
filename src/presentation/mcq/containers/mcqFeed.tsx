// src/presentation/question/containers/QuestionFeed.js
import React, {useEffect} from 'react';
import {Dimensions} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import MCQUseCase from '../../../core/domain/mcq/mcqUseCase';
import {useAppSelector} from '../../../core/redux/hooks';
import MCQPage from '../components/mcqPage';

const MCQFeed = () => {
  const questions = useAppSelector(state => state.mcq.questions);
  //scroll, when get to

  useEffect(() => {
    fetchMore();
  }, []);

  const fetchMore = () => {
    console.log('fetching more');
    MCQUseCase.fetchQuestion();
    MCQUseCase.fetchQuestion();
    MCQUseCase.fetchQuestion();
  };

  const _renderItem = ({item, index}) => {
    return <MCQPage key={index} mcq={item} />;
  };

  return (
    // <FlatList
    //   onEndReached={fetchMore}
    //   data={questions}
    //   renderItem={({item, index, separators}) => (
    //     <TouchableHighlight
    //       key={index}
    //       onShowUnderlay={separators.highlight}
    //       onHideUnderlay={separators.unhighlight}>
    //       <MCQPage mcq={item} />
    //     </TouchableHighlight>
    //   )}
    // />

    <Carousel
      data={questions}
      renderItem={_renderItem}
      sliderHeight={Dimensions.get('window').height}
      itemHeight={Dimensions.get('window').height}
      vertical={true}
      lockScrollWhileSnapping={true}
      inactiveSlideScale={0.95} // Adjust the scale factor for inactive slides
      inactiveSlideOpacity={0.7} // Adjust the opacity for inactive slides
      onEndReached={fetchMore}
      onEndReachedThreshold={0.1} // Adjust the threshold as needed
    />
  );
};

export default MCQFeed;

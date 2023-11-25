import * as React from 'react';
import type {RootState} from '../store';
import {useSelector, useDispatch} from 'react-redux';
import { decrement, increment } from '../features/counter/counterSlice';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

function HomePage({ navigation }) {
   const count = useSelector((state: RootState) => state.counter.value);
   const dispatch = useDispatch();
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? Colors.darker : Colors.lighter;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View style={styles.body}>
          <Text style={{color: 'white', fontSize: 100}}>Sample Text</Text>
          <Button
            title="Go to Another"
            onPress={() => navigation.navigate('Another')}
          />
          <Button title="Increament" onPress={() => dispatch(increment())} />
          <Button title="Decreament" onPress={() => dispatch(decrement())} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    color: 'black',
    backgroundColor: 'black',
  },
});

export default HomePage;

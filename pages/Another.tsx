import * as React from 'react';
import type {RootState} from '../store';
import {useSelector} from 'react-redux';
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

function AnotherPage({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = isDarkMode ? Colors.darker : Colors.lighter;
  const count = useSelector((state: RootState) => state.counter.value);

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
          <Text style={{color: 'white'}}>Count {count}</Text>
          <Button title="Go Home" onPress={() => navigation.navigate('Home')} />
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

export default AnotherPage;

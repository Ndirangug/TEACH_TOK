import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AnotherPage from './pages/Another';
import HomePage from './pages/Home';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Another" component={AnotherPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

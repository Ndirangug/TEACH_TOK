import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {store} from './store';
import {Provider} from 'react-redux';
import AnotherPage from './pages/Another';
import HomePage from './pages/Home';

const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Another" component={AnotherPage} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;

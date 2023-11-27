import React from 'react';
import {Provider} from 'react-redux';
import AppNavigator from './app/navigation/AppNavigator';
import {store} from './core/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}

export default App;

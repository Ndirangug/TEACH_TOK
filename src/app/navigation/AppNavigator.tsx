import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {incrementSeconds} from '../../core/redux/timer/timerSlice';
import HomeScreen from '../../presentation/HomeScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = (): JSX.Element => {
  const dispatch = useDispatch();

  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch(incrementSeconds());
    }, 1000);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [dispatch]);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{headerShown: false}}
          name="HomeScreen"
          component={HomeScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

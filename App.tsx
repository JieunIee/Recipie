/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router.tsx';
import SplashScreen from "react-native-splash-screen";

function App(): React.JSX.Element {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  });
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  )
};

export default App;

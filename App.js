/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {AppStack} from './navigation/AppNavigation';
const App = ()=>{
  return(
  <NavigationContainer>
    <AppStack/>
  </NavigationContainer>
  )
}
export default App;

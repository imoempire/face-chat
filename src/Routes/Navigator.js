import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyStack from './MyStack';

const Navigator = () => {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

export default Navigator;
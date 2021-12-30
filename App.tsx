
import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigation/stacks/_MainStack';

const App:FC = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default App;

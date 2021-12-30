import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';

const Stack = createStackNavigator();

const MainStack = () => {
    return (
        <Stack.Navigator>
            {
                screens.map((screen: any, index: any) => (
                    <Stack.Screen
                        key={index}
                        name={screen.name}
                        component={screen.component}
                    />
                ))
            }
        </Stack.Navigator>
    )
}

export default MainStack;
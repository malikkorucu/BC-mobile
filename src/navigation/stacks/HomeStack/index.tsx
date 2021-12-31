import React, { FC } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import screens from './screens';
import { DefaultHeader } from '../../headers/DefaultHeader';
import { IScreen } from '../Models/IScreen';

const Stack = createStackNavigator();

const HomeStack: FC = () => {
    return (
        <Stack.Navigator>
            {
                screens.map((screen: IScreen, index: any) => (
                    <Stack.Screen
                        key={index}
                        name={screen.name}
                        component={screen.component}
                        options={{
                            header: (props) => <DefaultHeader title={screen.title} {...props} />
                        }}
                    />
                ))
            }
        </Stack.Navigator>
    )
}

export default HomeStack;
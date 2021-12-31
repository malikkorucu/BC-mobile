import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../../screens/Home/HomeScreen';
import { AboutScreen } from '../../screens/About/AboutScreen';
import { BottomTabContainer } from './BottomTabContainer';
import { View, Text } from 'react-native';
import HomeStack from '../stacks/HomeStack';
import { BottomTabItemList } from './_BottomTabItemList';

const Tab = createBottomTabNavigator();

const options = {
    headerShown: false
} as ReactNavigation.RootParamList;

export const BottomTabNavigation = () => {
    return (
        <Tab.Navigator tabBar={(props) => <BottomTabContainer {...props} />}>
            {
                BottomTabItemList.map((item: any) => (
                    <Tab.Screen key={item.label} options={options} name={item.label} component={item.component} />
                ))
            }
        </Tab.Navigator>
    )
}
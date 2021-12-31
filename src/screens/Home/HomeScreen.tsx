import React, { FC,useEffect } from 'react';
import { Button, Text, View } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';

export const HomeScreen: FC<any> = () => {
    const navigation: NavigationProp<any> = useNavigation();

    useEffect(()=> {
        console.log('state',navigation.getState())
    },[])
    return (
        <View style={{ flex: 1,padding:16 }}>
            <Button title="Home Detail" onPress={() => navigation.navigate('HomeDetail')} />
        </View>
    )
}
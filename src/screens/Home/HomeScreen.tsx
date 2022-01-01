import React, {FC, useLayoutEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TextInput} from '@components';
import layout from '../../config/layout.json';

export const HomeScreen: FC<any> = () => {
  const navigation: any = useNavigation();

  useLayoutEffect(() => {
    if (layout.menu === 'drawer') {
      navigation.setOptions({
        headerRight: () => (
          <Button title="Drawer" onPress={() => navigation.openDrawer()} />
        ),
      });
    }
  }, [navigation]);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
      }}>
      <Button
        title="Home Detail"
        onPress={() => navigation.navigate('HomeDetail')}
      />
      <TextInput />
      <Text>{JSON.stringify(navigation.getState(), null, 2)}</Text>
    </View>
  );
};

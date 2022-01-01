import React, {FC,useLayoutEffect} from 'react';
import { View, Text } from 'react-native';
import layout from '../../config/layout.json'

export const AboutScreen: FC<any> = ({navigation}) => {
  useLayoutEffect(() => {
    if (layout.menu === 'drawer') {
      navigation.setOptions({
         drawerHideStatusBarOnOpen:true,
         lazy:true
      });
    }
  }, [navigation]);

  return (
    <View style={{flex: 1, padding: 16}}>
      <Text>About Screen</Text>
    </View>
  );
};

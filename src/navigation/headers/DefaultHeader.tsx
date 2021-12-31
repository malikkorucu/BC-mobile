import React, { FC } from 'react';
import { Text, View, Pressable } from 'react-native';

export const DefaultHeader: FC<any> = (props) => {
    const { navigation, back, title, state } = props

    return (
        <View style={{ height: 55, backgroundColor: '#dedede', flexDirection: 'row', paddingHorizontal: 16 }}>
            {
                <View style={{ flex: 1 }}>
                    {
                        back && (
                            <Pressable onPress={() => navigation.goBack()} style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text>Back</Text>
                            </Pressable>
                        )
                    }
                </View>
            }
            {
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>{title}</Text>
                </View>
            }
            {
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Pressable onPress={() => {
                       console.log(navigation.setOptions)
                    }} style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-start' }}>
                        <Text>action</Text>
                    </Pressable>
                </View>
            }
        </View>
    )
}
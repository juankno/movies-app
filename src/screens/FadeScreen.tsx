import React from 'react';
import { View, Animated, Button } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {

    const { opacity, fadeIn, fadeOut } = useFade();
    return (
        <View style={{
            flex: 1,
            backgroundColor: 'grey',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <Animated.View style={{
                backgroundColor: '#084F6A',
                width: 150,
                height: 150,
                marginBottom: 10,
                borderColor: 'white',
                borderWidth: 10,
                opacity: opacity,
            }} />

            <Button
                title="Fade In"
                onPress={() => fadeIn()}
            />

            <View style={{ marginVertical: 10 }} />

            <Button
                title="Fade Out"
                onPress={() => fadeOut()}
            />
        </View>
    );
};

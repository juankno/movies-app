import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './src/theme/appTheme';

export const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{
        alignItems: 'center',
        fontSize: 30,
        fontWeight: 'bold',
      }}>Peliculas App
      </Text>
    </View>
  );
};

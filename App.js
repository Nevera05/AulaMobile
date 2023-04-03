import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RandomGenerator from './components/RandomGenerator';

export default function App() {
  return (
    <View style={styles.container}>
      <RandomGenerator min={1} max={10} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

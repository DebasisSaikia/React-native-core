import React from 'react';
import Header from './components/Header'
import { StyleSheet, View, Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.screen}>
      <Header title="Number Game" />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  }
});

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Onboarding from './components/Slider/Onboarding';


export default function App() {

  return (
      <Onboarding  />
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

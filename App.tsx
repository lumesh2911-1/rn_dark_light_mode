import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import AppNavigatorScreen from './src/navigation/AppNavigatorScreen';
import { ThemeProvider } from './src/context/ThemeContext';

export default function App() {
  return (
    <>
      <ThemeProvider>
        <AppNavigatorScreen />
      </ThemeProvider>
    </>
  );
}

const styles = StyleSheet.create({});

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Main from './components/Main'
import { View } from 'react-native';

export default function App() {
  return (
    <PaperProvider>
       
        <Main></Main>
        <StatusBar style="auto" />
    </PaperProvider>
  );
}


import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ButtomTab from './assets/navigation/buttonTab';
import { setStatusBarBackgroundColor } from 'expo-status-bar';
import axios from 'axios';

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar barStyle={setStatusBarBackgroundColor('black')}/>
      <ButtomTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

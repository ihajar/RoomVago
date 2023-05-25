import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import StackNavigator from './src/StackNavigator/StackNavigator';
import { ModalPortal } from 'react-native-modals';


export default function App() {
  return (
    <>
      <StackNavigator/>
      <ModalPortal/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F9F9',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

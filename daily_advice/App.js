import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Advice from './components/advice';

export default function App() {
  return (
    <View style={styles.container}>

      <Advice />
      <Text>Conselhos diários!</Text>
      <Text>Conselhos diários!</Text>

      <StatusBar style="auto" />
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

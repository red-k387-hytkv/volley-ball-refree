import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInputBase, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>さあ審判アプリ作るぞ</Text>
      <Text>さあ審判アプリ作るぞ</Text>
      <Text>gitの動作確認</Text>
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

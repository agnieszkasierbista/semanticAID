import {StyleSheet, Text, TextInput, View} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <TextInput style={styles.input}/>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "lightgray",
    borderWidth: 2,
    borderStyle: "dashed",
    borderColor: "black",
    borderRadius: 5,
    width: 150,
    aspectRatio: 2,
  },
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

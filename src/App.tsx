import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  }
});

function App() {
  return (
    <View style={styles.app}>
      <Text>Hi there</Text>
    </View>
  );
}

export { App };

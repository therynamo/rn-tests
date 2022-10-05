import * as React from "react";
import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";

const { Screen, Navigator } = createStackNavigator();

function HomeScreen(props) {
  return (
    <View>
      <Text>Home</Text>
    </View>
  );
}

function DetailsScreen(props) {
  return (
    <View>
      <Text>Details</Text>
    </View>
  );
}

export default function Navigation() {
  const options = {};

  return (
    <Navigator>
      <Screen name="Home" component={HomeScreen} />
      <Screen options={options} name="Details" component={DetailsScreen} />
    </Navigator>
  );
}

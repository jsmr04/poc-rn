import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { View, Text } from "react-native";
import * as Linking from 'expo-linking';

const Stack = createStackNavigator();
const prefix = Linking.createURL('/');

const Home = () => (
  <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
    <Text>Home</Text>
  </View>
);

const Profile = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Profile</Text>
    </View>
  );

  const Settings = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Settings</Text>
    </View>
  );

export default () => {
    const linking = {
        prefixes: [prefix],
      };

      console.log('prefix ', prefix)

  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerMode: "screen",
          headerTintColor: "white",
          headerStyle: { backgroundColor: "tomato" },
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: "Awesome app",
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "My profile",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{
            gestureEnabled: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

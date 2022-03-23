// In App.js in a new project

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StackNavigator } from "./StackNavigator";

export function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

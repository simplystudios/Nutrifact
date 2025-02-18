import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import Scanner from "./screens/Scannerpage";
import Homepage from "./screens/Homepage";
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import RootStack from "./navigators/RootStack";

export default function App() {
  

  return (
    <PaperProvider>
      <View style={styles.container}>
      <RootStack/>
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
  },
  
});
AppRegistry.registerComponent(App, () => Main);
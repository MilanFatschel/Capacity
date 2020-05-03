import React from 'react';
import { StyleSheet } from 'react-native';
import Amplify from "@aws-amplify/core";
import config from "./aws-exports";
Amplify.configure(config);

import RootNavigationStack from './src/components/navigators/RootNavigator'

export default function App() {
  return (
    <RootNavigationStack></RootNavigationStack>
    // <AppNavigationStack></AppNavigationStack>
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

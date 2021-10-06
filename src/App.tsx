import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {StatusBar, StorageManager} from 'native-base';
import {
  ColorMode,
  extendTheme,
  NativeBaseProvider,
  useColorMode,
} from 'native-base';
import React, {useEffect} from 'react';
import RootNavigator from './routes';
import {Platform} from 'react-native';

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar />
      <Navigator />
    </NativeBaseProvider>
  );
}

function Navigator() {
  const {colorMode, toggleColorMode} = useColorMode();

  return (
    <NavigationContainer
      theme={colorMode === 'light' ? DefaultTheme : DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

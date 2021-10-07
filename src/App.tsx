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
import database from './database';
import DatabaseProvider from '@nozbe/watermelondb/DatabaseProvider';
import {GlobalProvider} from './provider/useGlobal';

export default function App() {
  return (
    <DatabaseProvider database={database}>
      <NativeBaseProvider>
        <GlobalProvider>
          <StatusBar />
          <Navigator />
        </GlobalProvider>
      </NativeBaseProvider>
    </DatabaseProvider>
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

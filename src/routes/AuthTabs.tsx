import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box, useTheme} from 'native-base';
import React from 'react';
import { Settings } from 'react-native';
import HomeIcon from '../assets/icon/HomeIcon';
import SettingsIcon from '../assets/icon/SettingsIcon';
import StockIcon from '../assets/icon/StockIcon';
import TransactionIcon from '../assets/icon/TransactionIcon';
import HomeScreen from '../screens/Home';
import SettingsScreen from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        key="dashboard"
        name="Dashboard"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: colors.primary[400],
          tabBarIcon: ({focused, color, size}) => {
            return (
              <HomeIcon
                height={size}
                width={size}
                color={focused ? colors.primary[400] : color}
              />
            );
          },
          // header: props => {
          //   return (
          //     <>
          //       <Box safeAreaTop />

          //       <SearchAndFilter
          //         onSubmit={data => {
          //           props.navigation.navigate('SearchResult', data);
          //         }}
          //       />
          //     </>
          //   );
          // },
        }}
      />
      <Tab.Screen
        key="transaction"
        name="Transaction"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: colors.primary[400],
          tabBarIcon: ({focused, color, size}) => {
            return (
              <TransactionIcon
                height={size}
                width={size}
                color={focused ? colors.primary[400] : color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        key="stock"
        name="Stock"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: colors.primary[400],
          tabBarIcon: ({focused, color, size}) => {
            return (
              <StockIcon
                height={size}
                width={size}
                color={focused ? colors.primary[400] : color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        key="settings"
        name="Settings"
        component={SettingsScreen}
        options={{
          tabBarActiveTintColor: colors.primary[400],
          tabBarIcon: ({focused, color, size}) => {
            return (
              <SettingsIcon
                height={size}
                width={size}
                color={focused ? colors.primary[400] : color}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

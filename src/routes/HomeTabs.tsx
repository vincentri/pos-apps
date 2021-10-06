import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Box, useTheme} from 'native-base';
import React from 'react';
import HomeScreen from '../screens/Home';

const Tab = createBottomTabNavigator();

export default function RootNavigator() {
  const {colors} = useTheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: colors.primary[400],
          // tabBarIcon: ({focused, color, size}) => {
          //   return (
          //     <BookIcon
          //       height={size}
          //       width={size}
          //       color={focused ? colors.primary[400] : color}
          //     />;
          //   );
          // },
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
    </Tab.Navigator>
  );
}

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeTabs from './HomeTabs';

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeTabs} />
      {/* <Stack.Screen name='SearchResult' component={SearchResultScreen} />
      <Stack.Screen name='About' component={AboutScreen} options={{ headerShown: true, headerTitle: 'About Us' }} />
      <Stack.Screen name='ContactUs' component={ContactUsScreen} options={{ headerShown: true, headerTitle: 'Contact Us' }} />
      <Stack.Screen name='BookDetails' component={BookDetailsScreen} options={{ headerShown: true, headerTitle: '' }} />
      <Stack.Screen name='ListChapters' component={ListChapters} options={{ headerShown: true, headerTitle: 'Chapters' }} />
      <Stack.Screen
        name='ReadBook'
        component={ReadBookScreen}
        options={{
          animation: 'slide_from_bottom',
        }}
      /> */}
    </Stack.Navigator>
  );
}

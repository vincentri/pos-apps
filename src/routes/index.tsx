import {useDatabase} from '@nozbe/watermelondb/hooks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Center, Spinner, VStack} from 'native-base';
import React, {useEffect, useState} from 'react';
import {useGlobal} from '../provider/useGlobal';
import Login from '../screens/Login';
import HomeTabs from './AuthTabs';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const {reRenderNavigation,setReRenderNavigation} = useGlobal();
  const [isLoading, setIsLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const database = useDatabase();

  const checkIsLogin = async () => {
    const loginStatus = await database.adapter.getLocal('isLogin');
    setIsLogin(loginStatus ? true : false);
    setIsLoading(false);
    setReRenderNavigation(false)
  };

  useEffect(() => {
    if (reRenderNavigation) checkIsLogin();
  }, [reRenderNavigation]);

  if (isLoading) {
    return (
      <Center flex={1} px="3">
        <VStack space={4} alignItems="center">
          <Spinner color="emerald.500" size="lg" />
        </VStack>
      </Center>
    );
  }

  return (
    <Stack.Navigator
      key="homeNavigator"
      initialRouteName="Tunnel"
      screenOptions={{
        headerShown: false,
      }}>
      {isLogin ? (
        <Stack.Screen name="AuthLayout" component={HomeTabs} />
      ) : (
        <Stack.Screen name="Login" component={Login} />
      )}
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
};

export default RootNavigator;

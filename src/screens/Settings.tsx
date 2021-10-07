import React from 'react';
import {Box, Divider, HStack, VStack, Text, Heading, Center} from 'native-base';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {useGlobal} from '../provider/useGlobal';
import {Pressable} from 'react-native';

const SettingsScreen = () => {
  const {setReRenderNavigation} = useGlobal();
  const database = useDatabase();
  const logout = async () => {
    await database.adapter.removeLocal('isLogin');
    setReRenderNavigation(true);
  };
  return (
    <Box py={6} px={4} flex={1}>
      <VStack space={4}>
        <Pressable onPress={logout}>
          <HStack
            py={1}
            justifyContent="space-between"
            alignItems="center"
            paddingBottom={5}
            borderBottomWidth="0.5">
            <Text>Logout</Text>
          </HStack>
        </Pressable>
      </VStack>
    </Box>
  );
};

export default SettingsScreen;

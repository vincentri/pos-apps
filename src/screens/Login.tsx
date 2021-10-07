import React from 'react';
import {Box, Button} from 'native-base';
import {useDatabase} from '@nozbe/watermelondb/hooks';
import {useGlobal} from '../provider/useGlobal';

const Login = () => {
  const {setReRenderNavigation} = useGlobal();
  const database = useDatabase();
  const login = async () => {
    await database.adapter.setLocal('isLogin', 'true');
    setReRenderNavigation(true);
  };
  return (
    <Box>
      <Button onPress={login}>Login</Button>
    </Box>
  );
};

export default Login;

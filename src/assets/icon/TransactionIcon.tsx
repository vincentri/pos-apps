import {Icon, IIconProps} from 'native-base';
import React from 'react';
import {Path} from 'react-native-svg';

function TransactionIcon(
  props: JSX.IntrinsicAttributes & IIconProps & React.RefAttributes<unknown>,
) {
  return (
    <Icon
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      {...props}>
      <Path d="M2 22h28v2H2z" fill="currentColor" />
      <Path d="M2 26h28v2H2z" fill="currentColor" />
      <Path d="M24 10a2 2 0 1 0 2 2a2 2 0 0 0-2-2z" fill="currentColor" />
      <Path
        d="M16 16a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4zm0-6a2 2 0 1 0 2 2a2.002 2.002 0 0 0-2-2z"
        fill="currentColor"
      />
      <Path d="M8 10a2 2 0 1 0 2 2a2 2 0 0 0-2-2z" fill="currentColor" />
      <Path
        d="M28 20H4a2.005 2.005 0 0 1-2-2V6a2.005 2.005 0 0 1 2-2h24a2.005 2.005 0 0 1 2 2v12a2.003 2.003 0 0 1-2 2zm0-14H4v12h24z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default TransactionIcon;

import {Icon, IIconProps} from 'native-base';
import React from 'react';
import {Path} from 'react-native-svg';

function StockIcon(
  props: JSX.IntrinsicAttributes & IIconProps & React.RefAttributes<unknown>,
) {
  return (
    <Icon
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 32 32"
      {...props}>
      <Path d="M19 24h4v4h-4z" fill="currentColor" />
      <Path d="M26 24h4v4h-4z" fill="currentColor" />
      <Path d="M19 17h4v4h-4z" fill="currentColor" />
      <Path d="M26 17h4v4h-4z" fill="currentColor" />
      <Path
        d="M17 24H4V10h24v5h2v-5a2.002 2.002 0 0 0-2-2h-6V4a2.002 2.002 0 0 0-2-2h-8a2.002 2.002 0 0 0-2 2v4H4a2.002 2.002 0 0 0-2 2v14a2.002 2.002 0 0 0 2 2h13zM12 4h8v4h-8z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default StockIcon;

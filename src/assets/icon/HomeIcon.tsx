import {Icon, IIconProps} from 'native-base';
import React from 'react';
import {Path} from 'react-native-svg';

function HomeIcon(
  props: JSX.IntrinsicAttributes & IIconProps & React.RefAttributes<unknown>,
) {
  return (
    <Icon
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
      {...props}>
      <Path
        d="M12.223 11.641l-.223.22l-.224-.22a2.224 2.224 0 0 0-3.125 0a2.13 2.13 0 0 0 0 3.07L12 18l3.349-3.289a2.13 2.13 0 0 0 0-3.07a2.225 2.225 0 0 0-3.126 0z"
        fill="currentColor"
      />
      <Path
        d="M21.707 11.293l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707zM18.001 20H6v-9.585l6-6l6 6V15l.001 5z"
        fill="currentColor"
      />
    </Icon>
  );
}

export default HomeIcon;
import {Icon, IIconProps} from 'native-base';
import React from 'react';
import {Path} from 'react-native-svg';

function SettingsIcon(
  props: JSX.IntrinsicAttributes & IIconProps & React.RefAttributes<unknown>,
) {
  return (
    <Icon
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 512 512"
      {...props}>
      <Path
        fill="currentColor"
        d="M88 160a64 64 0 1 0-64-64a64.072 64.072 0 0 0 64 64zm0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32z"
      />
      <Path
        fill="currentColor"
        d="M256 32a64 64 0 1 0 64 64a64.072 64.072 0 0 0-64-64zm0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32z"
      />
      <Path
        fill="currentColor"
        d="M424 160a64 64 0 1 0-64-64a64.072 64.072 0 0 0 64 64zm0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32z"
      />
      <Path
        fill="currentColor"
        d="M88 192a64 64 0 1 0 64 64a64.072 64.072 0 0 0-64-64zm0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32z"
      />
      <Path
        fill="currentColor"
        d="M256 192a64 64 0 1 0 64 64a64.072 64.072 0 0 0-64-64zm0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32z"
      />
      <Path
        fill="currentColor"
        d="M424 192a64 64 0 1 0 64 64a64.072 64.072 0 0 0-64-64zm0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32z"
      />
      <Path
        fill="currentColor"
        d="M424 352a64 64 0 1 0 64 64a64.072 64.072 0 0 0-64-64zm0 96a32 32 0 1 1 32-32a32.036 32.036 0 0 1-32 32z"
      />
      <Path fill="currentColor" d="M56 408h32v32H56z" />
      <Path fill="currentColor" d="M152 408h32v32h-32z" />
      <Path fill="currentColor" d="M248 408h32v32h-32z" />
    </Icon>
  );
}

export default SettingsIcon;
